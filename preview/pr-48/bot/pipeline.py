"""
Full processing pipeline:
  URL → scrape → look up prior entry → Claude extraction →
  scope check → YAML update → GitHub PR → status message
"""
from __future__ import annotations

import logging

import html as _html

from scraper import scrape
from extractor import extract, to_entry
from yaml_handler import find_existing, apply_change
from github_pr import get_conferences_content, create_pr
from core_lookup import lookup as core_lookup

_RANKED_TYPES = {"CNF", "JRN"}

logger = logging.getLogger(__name__)


async def process_url(url: str, message_link: str = "") -> str:
    """
    Run the full pipeline for a single *url*.
    Returns a human-readable Telegram reply (Markdown).
    """

    # ── 1. Scrape ─────────────────────────────────────────────────────────────
    def e(s: object) -> str:
        """Escape a value for safe HTML output in Telegram."""
        return _html.escape(str(s))

    try:
        page_text = await scrape(url)
    except Exception as exc:
        logger.warning("Scrape failed for %s: %s", url, exc)
        return f"⚠️ Could not fetch that URL ({e(exc)}). Please add the entry manually."

    # ── 2. Read current conferences.yml from GitHub ───────────────────────────
    try:
        content, sha = get_conferences_content()
    except Exception as exc:
        logger.error("GitHub read failed: %s", exc)
        return "⚠️ Could not read conferences.yml from GitHub. Check bot permissions."

    # ── 3. First-pass extraction (no prior entry yet) ─────────────────────────
    try:
        raw = extract(page_text, url, prior_entry=None)
    except Exception as exc:
        logger.error("Extraction failed: %s", exc)
        return f"⚠️ Extraction failed ({e(exc)}). Please add the entry manually."

    if not raw.get("in_scope", True):
        reason = raw.get("out_of_scope_reason") or "Does not meet MPC Deadlines scope criteria."
        return f"⚠️ Out of scope — {e(reason)}"

    conf_name: str = raw.get("name", "")

    # ── 4. Look up prior-year entries and re-extract with context ─────────────
    existing = find_existing(content, conf_name) if conf_name else []

    if existing:
        prior = max(existing, key=lambda e: e.get("year", 0))
        logger.info("Found prior entry for %s (year %s) — re-extracting with context", conf_name, prior.get("year"))
        try:
            raw = extract(page_text, url, prior_entry=prior)
        except Exception as exc:
            logger.warning("Re-extraction with prior entry failed: %s — using first-pass result", exc)
        if not raw.get("in_scope", True):
            reason = raw.get("out_of_scope_reason") or "Does not meet scope criteria."
            return f"⚠️ Out of scope — {e(reason)}"

    # ── 5. Build the YAML entry dict ──────────────────────────────────────────
    try:
        entry = to_entry(raw)
    except Exception as exc:
        logger.error("Entry construction failed: %s", exc)
        return f"⚠️ Could not build entry ({e(exc)}). Please add manually."

    # ── 5b. Verify CORE rank from portal (conferences and journals only) ──────
    tags = entry.get("tags", [])
    type_tag = next((t for t in tags if t in ("CNF", "JRN", "WK", "PS", "CRS", "MISC")), None)
    if type_tag in _RANKED_TYPES:
        verified_rank = await core_lookup(entry.get("name", ""))
        entry["tags"] = [t for t in tags if not t.startswith("CORE")] + [verified_rank]
        logger.info("CORE rank verified: %s → %s", entry.get("name"), verified_rank)

    # ── 6. Determine insert vs update ─────────────────────────────────────────
    try:
        new_content, action = apply_change(content, entry)
    except Exception as exc:
        logger.error("YAML update failed: %s", exc)
        return "⚠️ Failed to update conferences.yml. Check bot logs."

    if action == "duplicate":
        return (
            f"ℹ️ <b>{e(entry['name'])} {entry['year']}</b> is already fully tracked — "
            "no changes needed."
        )

    # ── 7. Create GitHub PR ───────────────────────────────────────────────────
    try:
        pr_url = create_pr(new_content, sha, entry, action, url, message_link)
    except Exception as exc:
        logger.error("PR creation failed: %s", exc)
        return f"⚠️ YAML updated but PR creation failed ({e(exc)}). Check bot logs."

    # ── 8. Build reply ────────────────────────────────────────────────────────
    action_verb = "Added" if action == "insert" else f"Updated ({action.replace('upgrade ', '')})"
    tags_str = " · ".join(entry.get("tags", []))

    return (
        f"✅ <b>{e(action_verb)}: {e(entry['name'])} {entry['year']}</b>\n"
        f"<code>{e(tags_str)}</code>\n"
        f"<a href='{e(pr_url)}'>Open PR →</a>"
    )
