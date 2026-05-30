"""
Full processing pipeline:
  URL → scrape → look up prior entry → Claude extraction →
  scope check → YAML update → GitHub PR → status message
"""
from __future__ import annotations

import logging

from scraper import scrape
from extractor import extract, to_entry
from yaml_handler import find_existing, apply_change
from github_pr import get_conferences_content, create_pr

logger = logging.getLogger(__name__)


async def process_url(url: str, message_link: str = "") -> str:
    """
    Run the full pipeline for a single *url*.
    Returns a human-readable Telegram reply (Markdown).
    """

    # ── 1. Scrape ─────────────────────────────────────────────────────────────
    try:
        page_text = await scrape(url)
    except Exception as exc:
        logger.warning("Scrape failed for %s: %s", url, exc)
        return f"⚠️ Could not fetch that URL (`{exc}`). Please add the entry manually."

    # ── 2. Read current conferences.yml from GitHub ───────────────────────────
    try:
        content, sha = get_conferences_content()
    except Exception as exc:
        logger.error("GitHub read failed: %s", exc)
        return "⚠️ Could not read `conferences.yml` from GitHub. Check bot permissions."

    # ── 3. First-pass extraction (no prior entry yet) ─────────────────────────
    try:
        raw = extract(page_text, url, prior_entry=None)
    except Exception as exc:
        logger.error("Claude extraction failed: %s", exc)
        return f"⚠️ Extraction failed (`{exc}`). Please add the entry manually."

    if not raw.get("in_scope", True):
        reason = raw.get("out_of_scope_reason", "Does not meet MPC Deadlines scope criteria.")
        return f"⚠️ *Out of scope* — {reason}"

    conf_name: str = raw.get("name", "")

    # ── 4. Look up prior-year entries and re-extract with context ─────────────
    existing = find_existing(content, conf_name) if conf_name else []

    if existing:
        # Use the most recent entry as the reference for tag inheritance
        prior = max(existing, key=lambda e: e.get("year", 0))
        logger.info("Found prior entry for %s (year %s) — re-extracting with context", conf_name, prior.get("year"))
        try:
            raw = extract(page_text, url, prior_entry=prior)
        except Exception as exc:
            logger.warning("Re-extraction with prior entry failed: %s — using first-pass result", exc)
        # Re-check scope after second pass
        if not raw.get("in_scope", True):
            reason = raw.get("out_of_scope_reason", "Does not meet scope criteria.")
            return f"⚠️ *Out of scope* — {reason}"

    # ── 5. Build the YAML entry dict ──────────────────────────────────────────
    try:
        entry = to_entry(raw)
    except Exception as exc:
        logger.error("Entry construction failed: %s", exc)
        return f"⚠️ Could not build entry (`{exc}`). Please add manually."

    # ── 6. Determine insert vs update ─────────────────────────────────────────
    try:
        new_content, action = apply_change(content, entry)
    except Exception as exc:
        logger.error("YAML update failed: %s", exc)
        return "⚠️ Failed to update `conferences.yml`. Check bot logs."

    if action == "duplicate":
        return (
            f"ℹ️ *{entry['name']} {entry['year']}* is already fully tracked — "
            "no changes needed."
        )

    # ── 7. Create GitHub PR ───────────────────────────────────────────────────
    try:
        pr_url = create_pr(new_content, sha, entry, action, url, message_link)
    except Exception as exc:
        logger.error("PR creation failed: %s", exc)
        return f"⚠️ YAML updated but PR creation failed (`{exc}`). Check bot logs."

    # ── 8. Build reply ────────────────────────────────────────────────────────
    action_verb = "Added" if action == "insert" else f"Updated ({action.replace('upgrade ', '')})"
    tags_str = " · ".join(entry.get("tags", []))

    return (
        f"✅ *{action_verb}: {entry['name']} {entry['year']}*\n"
        f"`{tags_str}`\n"
        f"[Open PR]({pr_url})"
    )
