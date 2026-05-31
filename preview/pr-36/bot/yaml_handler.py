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

_LIST_ITEM_RE = re.compile(r"^- name:", re.MULTILINE)


def _all_item_starts(content: str) -> list[int]:
    """Character offsets of every '- name:' list-item start."""
    return [m.start() for m in _LIST_ITEM_RE.finditer(content)]


def _entry_bounds(content: str, name: str, year: int) -> Optional[tuple[int, int]]:
    """
    Return (start, end) char offsets for the entry matching *name* + *year*.
    *end* points to the character just after the last newline of the entry
    (i.e. the start of the next entry, or EOF).
    """
    starts = _all_item_starts(content)
    for i, start in enumerate(starts):
        end = starts[i + 1] if i + 1 < len(starts) else len(content)
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


def find_existing(content: str, name: str) -> list[dict]:
    """Return all entries in *content* whose name matches (case-insensitive, year-stripped)."""
    try:
        all_entries: list[dict] = yaml.safe_load(content) or []
    except Exception:
        return []
    needle = _norm_name(name)
    return [e for e in all_entries if _norm_name(e.get("name", "")) == needle]


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

        # Replace existing entry in-place
        bounds = _entry_bounds(content, name, year)
        new_block = format_entry(new_entry) + "\n\n"
        if bounds:
            start, end = bounds
            new_content = content[:start] + new_block + content[end:]
        else:
            new_content = content.rstrip() + "\n\n" + new_block
        return new_content, f"upgrade ({old_status} → {new_status})"

    # ── Insert new entry ──────────────────────────────────────────────────────
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
