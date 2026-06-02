"""
Read, insert, and update entries in conferences.yml while preserving
the file's comment-based CORE category section headers (e.g. # CORE A*).

Strategy
--------
We treat the raw file as text so that comments are never lost.
- Parsing (find existing / determine position): PyYAML safe_load on the full list.
- Entry serialisation: a custom formatter that matches the repo's indentation style.
- Insertion / replacement: string splicing at character offsets found by scanning
  for "^- name:" list-item markers.
"""
from __future__ import annotations

import re
import yaml
from datetime import datetime, timezone
from typing import Optional
from urllib.parse import urlparse

_YEAR_RE = re.compile(r"\s*\b(19|20)\d{2}\b\s*")

# ── CORE rank ordering ─────────────────────────────────────────────────────────

_RANK_ORDER: dict[str, int] = {
    "COREAS": 0, "COREA": 1, "COREB": 2, "COREC": 3,
    "COREN": 4, "COREU": 5, "COREO": 6,
}


def _rank(tags: list[str]) -> int:
    for t in tags:
        if t in _RANK_ORDER:
            return _RANK_ORDER[t]
    return 7  # unrecognised → append last


# ── Entry text formatter ───────────────────────────────────────────────────────

_FIELD_ORDER = [
    "name", "description", "year", "link",
    "abdeadline", "deadline", "rebut", "timezone",
    "date", "place", "comment", "conference", "tags",
]

# Commas are safe in YAML block scalars — only quote chars that truly need it
_NEEDS_QUOTE = re.compile(r'[:#\{\}\[\]\|>&\*!\"]')


def _scalar(val: object) -> str:
    if isinstance(val, int):
        return str(val)
    s = str(val)
    if _NEEDS_QUOTE.search(s) or s.startswith(" ") or s.endswith(" "):
        # Escape any embedded double-quotes and wrap
        return '"' + s.replace('"', '\\"') + '"'
    return s


def format_entry(entry: dict) -> str:
    """Render *entry* as the YAML block that goes into conferences.yml."""
    lines: list[str] = []

    for field in _FIELD_ORDER:
        if field not in entry:
            continue
        val = entry[field]

        if field == "deadline":
            vals = val if isinstance(val, list) else [val]
            if len(vals) == 1:
                lines.append(f'  deadline: ["{vals[0]}"]')
            else:
                lines.append("  deadline:")
                for d in vals:
                    lines.append(f'    - "{d}"')
            continue

        if field == "tags":
            lines.append(f"  tags: [{', '.join(str(t) for t in val)}]")
            continue

        lines.append(f"  {field}: {_scalar(val)}")

    if not lines:
        return ""
    # Replace the leading "  " on the first field with "- "
    lines[0] = "- " + lines[0][2:]
    return "\n".join(lines)


# ── Low-level text manipulation ────────────────────────────────────────────────

# A "boundary" is either a new list entry OR a section comment (# CORE ...).
# Using both as boundary markers means we never swallow section headers when
# replacing or removing an entry.
_LIST_ITEM_RE = re.compile(r"^- name:", re.MULTILINE)
_BOUNDARY_RE  = re.compile(r"^(?:- name:|#)", re.MULTILINE)


def _all_item_starts(content: str) -> list[int]:
    """Character offsets of every '- name:' list-item start."""
    return [m.start() for m in _LIST_ITEM_RE.finditer(content)]


def _all_boundaries(content: str) -> list[int]:
    """Character offsets of every '- name:' OR '# comment' line."""
    return [m.start() for m in _BOUNDARY_RE.finditer(content)]


def _entry_bounds(content: str, name: str, year: int) -> Optional[tuple[int, int]]:
    """
    Return (start, end) char offsets for the entry matching *name* + *year*.
    *end* stops at the next boundary (another entry OR a section comment),
    so section headers like '# CORE C' are never consumed.
    """
    item_starts = _all_item_starts(content)
    boundaries  = _all_boundaries(content)

    for i, start in enumerate(item_starts):
        # End = next boundary AFTER this entry's start
        next_boundaries = [b for b in boundaries if b > start]
        end = next_boundaries[0] if next_boundaries else len(content)

        chunk = content[start:end]
        try:
            parsed = yaml.safe_load(chunk)
            if (
                isinstance(parsed, list)
                and parsed
                and parsed[0].get("name", "").strip() == name.strip()
                and parsed[0].get("year") == year
            ):
                return start, end
        except Exception:
            continue
    return None


# ── Public API ─────────────────────────────────────────────────────────────────

def _norm_name(name: str) -> str:
    """Lowercase and strip any 4-digit year so 'INDOCRYPT 2026' matches 'INDOCRYPT'."""
    return _YEAR_RE.sub(" ", name).strip().lower()


def _all_deadlines_passed(entry: dict) -> bool:
    """
    Return True if every submission deadline in *entry* is in the past.
    Entries with no deadline, TBD deadline, or EXP/EXPCFP status are never pruned.
    """
    tags = entry.get("tags", [])
    if "EXP" in tags or "EXPCFP" in tags:
        return False

    deadlines = entry.get("deadline", [])
    if not deadlines:
        return False

    now = datetime.now(tz=timezone.utc)
    parsed = []
    for d in deadlines:
        if isinstance(d, str) and d.strip().upper() != "TBD":
            try:
                parsed.append(datetime.strptime(d.strip(), "%Y-%m-%d %H:%M").replace(tzinfo=timezone.utc))
            except ValueError:
                return False  # can't parse → be conservative, don't remove
        else:
            return False  # TBD → keep

    return bool(parsed) and all(dt < now for dt in parsed)


def _conservative_merge(existing: dict, new: dict) -> dict:
    """
    Merge *new* data into *existing* entry conservatively:
    - Start from the existing entry as the base (preserves all its fields/structure)
    - Always update: deadline, link (core facts that change each year)
    - Update only if field already exists in the original: every other field
    - Never add a field that wasn't in the original (prevents hallucinated fields
      like `conference` or `abdeadline` appearing out of nowhere)
    - Remove EXP / EXPCFP status tags since we are upgrading to a fuller status
    """
    merged = dict(existing)

    # Fields we always update if the new entry has real data
    always_update = {"deadline", "link"}
    for field in always_update:
        val = new.get(field)
        if val and val != ["TBD"]:
            merged[field] = val

    # Fields updated only when they already exist in the original
    update_if_present = {
        "abdeadline", "rebut", "date", "place", "comment",
        "timezone", "description",
    }
    for field in update_if_present:
        if field in existing and new.get(field):
            merged[field] = new[field]

    # Strip EXP / EXPCFP from tags — keep everything else (domain, type, CORE)
    merged["tags"] = [t for t in existing.get("tags", []) if t not in ("EXP", "EXPCFP")]

    return merged


def _merge_new_year(prior: dict, new: dict) -> dict:
    """
    Build the entry for a new year from *prior* (template) and *new* (LLM output).

    Rules:
    - Always take from new:  year, link, tags
    - Take from new if non-empty, else keep prior:  deadline, abdeadline, rebut,
                                                     date, place, comment, timezone
    - Always keep from prior:  name, description, conference  (stable across years)
    - Never add a field that didn't exist in prior (blocks hallucinated fields)
    """
    # Start with prior as the base — this preserves field order and all keys
    merged = dict(prior)

    # Always override with the new year / link
    merged["year"] = new["year"]
    merged["link"] = new["link"]

    # Override with LLM value if it found something real; else keep prior's value
    # as a placeholder so the field isn't lost
    for field in ("deadline", "abdeadline", "rebut", "date", "place",
                  "comment", "timezone"):
        val = new.get(field)
        real = val and val != ["TBD"] and val != "TBD"
        if real:
            merged[field] = val
        # else: leave prior's value in place (acts as a human-review placeholder)

    # Tags: use new tags (domain/type/CORE already verified by pipeline)
    # but preserve conference field from prior if it existed
    merged["tags"] = new.get("tags", prior.get("tags", []))

    # Strip any EXP/EXPCFP from prior that shouldn't carry over
    merged["tags"] = [t for t in merged["tags"] if t not in ("EXP", "EXPCFP")]

    return merged


def find_existing(content: str, name: str) -> list[dict]:
    """Return all entries in *content* whose name matches (case-insensitive, year-stripped)."""
    try:
        all_entries: list[dict] = yaml.safe_load(content) or []
    except Exception:
        return []
    needle = _norm_name(name)
    return [e for e in all_entries if _norm_name(e.get("name", "")) == needle]


def _conf_slug_from_url(url: str) -> str:
    """
    Extract a short conference identifier from a URL.
    Examples:
      https://ches.iacr.org/2027/        → 'ches'
      https://eurocrypt.iacr.org/2026/   → 'eurocrypt'
      https://cns2026.ieee-cns.org/      → 'cns'
      https://pkc.iacr.org/2027/         → 'pkc'
    """
    parsed = urlparse(url)
    host = parsed.netloc.lower().lstrip("www.")

    # Try subdomain (e.g. ches.iacr.org → 'ches')
    parts = host.split(".")
    if len(parts) >= 3:
        sub = parts[0]
        # Skip generic subdomains
        if sub not in ("www", "sites", "dl", "ieeexplore", "portal", "conf"):
            return re.sub(r"\d+", "", sub).strip("-")  # strip trailing years

    # Try first non-numeric path segment
    for seg in parsed.path.strip("/").split("/"):
        clean = re.sub(r"\d+", "", seg).strip("-")
        if clean and len(clean) > 2:
            return clean.lower()

    return ""


def find_existing_by_url(content: str, url: str) -> list[dict]:
    """
    Fallback: find existing entries whose stored link shares the same
    conference slug as *url*. Handles cases where the LLM can't identify
    the conference name from a sparse/pre-CFP page.
    """
    slug = _conf_slug_from_url(url)
    if not slug or len(slug) < 2:
        return []
    try:
        all_entries: list[dict] = yaml.safe_load(content) or []
    except Exception:
        return []

    matches = []
    for entry in all_entries:
        link = entry.get("link", "")
        entry_slug = _conf_slug_from_url(link)
        if entry_slug and entry_slug == slug:
            matches.append(entry)
        elif _norm_name(entry.get("name", "")) == slug:
            matches.append(entry)

    return matches


def apply_change(content: str, new_entry: dict) -> tuple[str, str]:
    """
    Insert or update *new_entry* in the YAML text *content*.

    Returns
    -------
    (new_content, action)
        action is one of:
          'insert'                       – brand new entry
          'upgrade (EXP → EXPCFP)'       – status promotion
          'upgrade (EXP → FULL)'
          'upgrade (EXPCFP → FULL)'
          'duplicate'                    – already fully tracked; no change
    """
    try:
        all_entries: list[dict] = yaml.safe_load(content) or []
    except Exception:
        all_entries = []

    name = new_entry["name"]
    year = new_entry["year"]
    needle = _norm_name(name)

    same_year = [
        e for e in all_entries
        if _norm_name(e.get("name", "")) == needle
        and e.get("year") == year
    ]

    new_tags = new_entry.get("tags", [])
    new_status = (
        "EXP" if "EXP" in new_tags
        else "EXPCFP" if "EXPCFP" in new_tags
        else "FULL"
    )

    # ── Inherit description from prior year when LLM missed it ───────────────
    if not new_entry.get("description"):
        prior_entries = [e for e in all_entries if _norm_name(e.get("name", "")) == needle]
        for pe in sorted(prior_entries, key=lambda e: e.get("year", 0), reverse=True):
            if pe.get("description"):
                new_entry["description"] = pe["description"]
                break

    if same_year:
        old_tags = same_year[0].get("tags", [])
        old_status = (
            "EXP" if "EXP" in old_tags
            else "EXPCFP" if "EXPCFP" in old_tags
            else "FULL"
        )

        if old_status == "FULL" and new_status == "FULL":
            return content, "duplicate"

        # Merge conservatively — patch only what changed, keep existing structure
        merged_entry = _conservative_merge(same_year[0], new_entry)

        bounds = _entry_bounds(content, name, year)
        new_block = format_entry(merged_entry) + "\n\n"
        if bounds:
            start, end = bounds
            new_content = content[:start] + new_block + content[end:]
        else:
            new_content = content.rstrip() + "\n\n" + new_block
        return new_content, f"upgrade ({old_status} → {new_status})"

    # ── Insert new entry ──────────────────────────────────────────────────────
    # If a prior-year entry exists, use it as the field template so we never
    # lose fields like place, comment, rebut that the LLM may have missed.
    prior_entries = [
        e for e in all_entries
        if _norm_name(e.get("name", "")) == needle
        and e.get("year") != year
    ]
    if prior_entries:
        prior = max(prior_entries, key=lambda e: e.get("year", 0))
        new_entry = _merge_new_year(prior, new_entry)

    # Remove stale prior-year entries (all deadlines passed) for the same conference
    stale = [
        e for e in all_entries
        if _norm_name(e.get("name", "")) == needle
        and e.get("year") != year
        and _all_deadlines_passed(e)
    ]
    working_content = content
    for stale_entry in stale:
        bounds = _entry_bounds(working_content, stale_entry["name"], stale_entry["year"])
        if bounds:
            start, end = bounds
            working_content = working_content[:start] + working_content[end:]

    new_rank = _rank(new_entry.get("tags", []))
    new_name_lower = _norm_name(name)

    new_block = format_entry(new_entry) + "\n\n"

    # Re-parse after stale removal to find correct insert position
    try:
        remaining = yaml.safe_load(working_content) or []
    except Exception:
        remaining = all_entries

    insert_before = None
    for entry in remaining:
        e_rank = _rank(entry.get("tags", []))
        e_name = _norm_name(entry.get("name", ""))
        if e_rank == new_rank and e_name > new_name_lower:
            insert_before = entry
            break
        if e_rank > new_rank:
            insert_before = entry
            break

    if insert_before is None:
        new_content = working_content.rstrip() + "\n\n" + new_block
    else:
        ib_year = insert_before.get("year", 0)
        ib_name = insert_before.get("name", "")
        bounds = _entry_bounds(working_content, ib_name, ib_year)
        if bounds:
            start, _ = bounds
            new_content = working_content[:start] + new_block + working_content[start:]
        else:
            new_content = working_content.rstrip() + "\n\n" + new_block

    removed = len(stale)
    action = "insert" + (f" (removed {removed} stale {'entry' if removed == 1 else 'entries'})" if removed else "")
    return new_content, action
