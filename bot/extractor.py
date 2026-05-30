"""
Use Groq (Llama 3.3 70B) to extract structured conference data from a scraped page.
When a prior-year entry exists in conferences.yml, it is passed in so the model
can inherit stable fields (domain tags, type, CORE rank) rather than guessing.
"""
import json
import re
import yaml
from openai import OpenAI
from config import GROQ_API_KEY

_client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1",
)
_MODEL = "llama-3.3-70b-versatile"

# ── Tool schema (OpenAI function-calling format) ───────────────────────────────

_TOOL: dict = {
    "type": "function",
    "function": {
    "name": "submit_conference_entry",
    "description": "Submit extracted and validated conference deadline data.",
    "parameters": {
        "type": "object",
        "required": [
            "in_scope", "name", "year", "link",
            "domain_tags", "type_tag", "core_tag", "status",
        ],
        "properties": {
            # Scope gate
            "in_scope": {
                "type": "boolean",
                "description": (
                    "True only if ALL THREE hold: (1) has a CFP with submission "
                    "link and formatting guidelines, (2) mentions MPC / secure "
                    "multi-party computation / privacy-preserving computing / "
                    "cryptography in its topics, (3) has a peer-review process "
                    "with named chairs or a program committee."
                ),
            },
            "out_of_scope_reason": {
                "type": ["string", "null"],
                "description": "Required when in_scope is false. Explain which criterion failed. null when in_scope is true.",
            },
            # Core fields
            "name": {
                "type": "string",
                "description": "Short conference name WITHOUT year (e.g. ACM CCS, CRYPTO, WAHC).",
            },
            "description": {"type": "string", "description": "Full conference name."},
            "year": {"type": "integer", "description": "Year the event takes place."},
            "link": {"type": "string", "description": "Official event homepage URL."},
            # Deadline fields
            "deadline": {
                "type": ["array", "null"],
                "items": {"type": "string"},
                "description": (
                    "Submission deadline(s) as 'YYYY-MM-DD HH:MM' strings "
                    "(24 h, no timezone suffix — that goes in the timezone field). "
                    "null when not yet published."
                ),
            },
            "abdeadline": {
                "anyOf": [
                    {"type": "string"},
                    {"type": "array", "items": {"type": "string"}},
                    {"type": "null"},
                ],
                "description": "Abstract / registration deadline(s) as human-readable text. Use a single comma-separated string when there are multiple (e.g. 'Jun 12, Aug 21').",
            },
            "rebut": {
                "type": ["string", "null"],
                "description": "Rebuttal / author response window as text.",
            },
            "timezone": {
                "type": ["string", "null"],
                "description": (
                    "Timezone in POSIX tz format with INVERTED sign "
                    "(UTC+7 → 'Etc/GMT-7'). null means AoE (UTC-12), which is the default."
                ),
            },
            "date": {
                "type": ["string", "null"],
                "description": "Conference dates, e.g. 'October 13-17'.",
            },
            "place": {"type": ["string", "null"], "description": "City, Country."},
            "comment": {
                "type": ["string", "null"],
                "description": "Notable notes: notification dates, multiple rounds, etc.",
            },
            "conference": {
                "type": ["string", "null"],
                "description": (
                    "If this is a workshop co-located with a main conference, "
                    "the short name of that conference (e.g. 'CCS'). null otherwise."
                ),
            },
            # Tags
            "domain_tags": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": ["THEORY", "PRACT", "APPLIED", "PPML", "HW", "SOK", "POS"],
                },
                "description": "Pick ALL that apply. See system prompt for definitions.",
            },
            "type_tag": {
                "type": "string",
                "enum": ["CNF", "JRN", "WK", "PS", "CRS", "MISC"],
                "description": "Pick exactly one publication / event type.",
            },
            "core_tag": {
                "type": "string",
                "enum": ["COREAS", "COREA", "COREB", "COREC", "COREN", "COREU", "COREO"],
                "description": (
                    "CORE portal ranking. If a prior entry is supplied, copy its "
                    "CORE tag — rankings rarely change year to year."
                ),
            },
            "status": {
                "type": "string",
                "enum": ["FULL", "EXPCFP", "EXP"],
                "description": (
                    "FULL = submission deadline dates are on the page. "
                    "EXPCFP = dates/venue confirmed but CFP deadline not yet published. "
                    "EXP = event announced only; no dates or CFP yet."
                ),
            },
        },
        "required": [
            "in_scope", "name", "year", "link",
            "domain_tags", "type_tag", "core_tag", "status",
        ],
    },
    },
}

# ── System prompt ──────────────────────────────────────────────────────────────

_SYSTEM = """\
You extract academic conference information for the MPC Deadlines Hub, which tracks \
deadlines for Multi-Party Computation (MPC), cryptography, privacy-preserving computing, \
and closely related security/theory venues.

SCOPE — an event is in-scope only when ALL THREE are true:
  1. Has a Call for Papers (CFP) with a submission link and formatting guidelines
  2. Topics explicitly include MPC / secure multi-party computation / \
privacy-preserving computing / cryptography
  3. Has a peer-review process with named general/program chairs or a program committee

DOMAIN TAGS (pick all that apply):
  THEORY  – theoretical / foundational research
  PRACT   – practical MPC systems and protocols
  APPLIED – applied cryptography (not purely theoretical)
  PPML    – privacy-preserving machine learning
  HW      – hardware security / implementations
  SOK     – systematization-of-knowledge papers track
  POS     – position papers track

TYPE TAG (pick exactly one):
  CNF  – conference
  JRN  – journal
  WK   – workshop
  PS   – poster session
  CRS  – crypto school / summer school
  MISC – anything else

CORE RANK (pick one):
  COREAS  A* | COREA  A | COREB  B | COREC  C | COREN  National | COREU  Unranked | COREO  Not classified
  If a prior entry is given → copy its CORE tag unchanged unless you have strong evidence it changed.
  IMPORTANT: Workshops (WK), poster sessions (PS), crypto schools (CRS), and MISC events do NOT have a CORE ranking — still provide a value for core_tag (use COREO) but it will be dropped automatically.

STATUS RULES:
  FULL    → the page has actual submission deadline date(s)
  EXPCFP  → event is confirmed (dates + venue known) but submission deadline not yet published
  EXP     → event only announced; no dates, no CFP yet

For EXP and EXPCFP entries, fill in as many fields as possible from the page or prior year.

TIMEZONE NOTE: The field uses INVERTED POSIX sign. UTC+7 → "Etc/GMT-7". \
Most conferences use AoE (UTC-12) — leave the timezone field null in that case.
"""


# ── Public API ─────────────────────────────────────────────────────────────────

def extract(page_text: str, url: str, prior_entry: dict | None = None) -> dict:
    """
    Call Claude to extract a structured conference entry.
    *prior_entry* is the most recent existing entry for this conference (if any).
    Returns Claude's tool-call input dict.
    """
    prior_block = ""
    if prior_entry:
        prior_yaml = yaml.dump(prior_entry, default_flow_style=False, allow_unicode=True)
        prior_block = (
            "\n\nPRIOR YEAR ENTRY — inherit domain_tags, type_tag, core_tag "
            "unless the page clearly contradicts them:\n"
            f"```yaml\n{prior_yaml}```\n"
        )

    response = _client.chat.completions.create(
        model=_MODEL,
        tools=[_TOOL],
        tool_choice={"type": "function", "function": {"name": "submit_conference_entry"}},
        messages=[
            {"role": "system", "content": _SYSTEM},
            {
                "role": "user",
                "content": (
                    f"URL: {url}"
                    f"{prior_block}"
                    f"\n\nPAGE TEXT:\n{page_text}"
                ),
            },
        ],
    )

    tool_calls = response.choices[0].message.tool_calls
    if tool_calls and tool_calls[0].function.name == "submit_conference_entry":
        return json.loads(tool_calls[0].function.arguments)

    raise RuntimeError("Groq did not invoke the extraction tool")


_TRAILING_YEAR_RE = re.compile(r",?\s*\b(19|20)\d{2}\b\.?\s*$")
_INLINE_YEAR_RE  = re.compile(r",?\s*\b(19|20)\d{2}\b")


def _strip_years(value: str) -> str:
    """
    Remove year references from rebut/date fields.
    'Oct 5-10, 2026'      → 'Oct 5-10'
    'March 1-4, 2027'     → 'March 1-4'
    'Dec 8-12, 2025'      → 'Dec 8-12'
    'Sep 28, Oct 5, 2026' → 'Sep 28, Oct 5'
    """
    return _INLINE_YEAR_RE.sub("", value).strip().rstrip(",").strip()


def to_entry(data: dict) -> dict:
    """
    Convert Groq's raw output dict into a conferences.yml-ready dict,
    with fields in the canonical order and correct tag list.
    """
    # Workshops, poster sessions, crypto schools and misc events have no CORE ranking
    _unranked_types = {"WK", "PS", "CRS", "MISC"}
    if data["type_tag"] in _unranked_types:
        tags = list(data["domain_tags"]) + [data["type_tag"]]
    else:
        tags = list(data["domain_tags"]) + [data["type_tag"], data["core_tag"]]
    if data["status"] == "EXP":
        tags.append("EXP")
    elif data["status"] == "EXPCFP":
        tags.append("EXPCFP")

    entry: dict = {}

    for key in ("name", "description", "year", "link"):
        if data.get(key) is not None:
            entry[key] = data[key]

    if data.get("abdeadline"):
        ab = data["abdeadline"]
        entry["abdeadline"] = ", ".join(ab) if isinstance(ab, list) else ab

    if data.get("deadline"):
        entry["deadline"] = data["deadline"]
    elif data["status"] in ("EXP", "EXPCFP"):
        entry["deadline"] = ["TBD"]

    if data.get("rebut"):
        entry["rebut"] = _strip_years(data["rebut"])

    if data.get("timezone"):
        entry["timezone"] = data["timezone"]

    if data.get("date"):
        entry["date"] = _strip_years(data["date"])

    if data.get("place"):
        entry["place"] = data["place"]

    if data.get("comment"):
        entry["comment"] = data["comment"]
    elif data["status"] == "EXP":
        entry["comment"] = "CFP yet to be announced"
    elif data["status"] == "EXPCFP":
        entry["comment"] = "Submission details TBA"

    if data.get("conference"):
        entry["conference"] = data["conference"]

    entry["tags"] = tags
    return entry
