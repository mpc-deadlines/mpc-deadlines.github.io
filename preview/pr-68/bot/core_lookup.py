"""
Look up a conference's CORE rank from https://portal.core.edu.au/conf-ranks/
Returns a tag string: COREAS, COREA, COREB, COREC, COREN, COREU, or COREO.
COREO means "not found / not classified" — used as the safe fallback.
"""
from __future__ import annotations

import logging
import httpx
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

_BASE = "https://portal.core.edu.au/conf-ranks/"
_HEADERS = {"User-Agent": "MPCDeadlinesBot/1.0 (+https://mpc-deadlines.github.io)"}

_RANK_MAP = {
    "a*":       "COREAS",
    "a":        "COREA",
    "b":        "COREB",
    "c":        "COREC",
    "national": "COREN",
    "unranked": "COREU",
}


async def lookup(conf_name: str) -> str:
    """
    Search CORE portal for *conf_name* (tries acronym search first, then full-text).
    Returns the best matching CORE tag, or COREO if not found.
    """
    result = await _search(conf_name, by="acronym")
    if result != "COREO":
        return result
    return await _search(conf_name, by="all")


async def _search(query: str, by: str) -> str:
    params = {
        "search": query,
        "by": by,
        "source": "all",
        "sort": "arank",
        "page": "1",
    }
    try:
        async with httpx.AsyncClient(follow_redirects=True, timeout=15) as client:
            resp = await client.get(_BASE, params=params, headers=_HEADERS)
            resp.raise_for_status()
    except Exception as exc:
        logger.warning("CORE portal request failed for %r: %s", query, exc)
        return "COREO"

    soup = BeautifulSoup(resp.text, "html.parser")
    table = soup.find("table")
    if not table:
        return "COREO"

    # Find the "Rank" column index from the header row
    header_row = table.find("tr")
    if not header_row:
        return "COREO"
    headers = [th.get_text(strip=True).lower() for th in header_row.find_all(["th", "td"])]
    try:
        rank_idx = headers.index("rank")
    except ValueError:
        rank_idx = 3  # fallback to 4th column

    rows = table.find_all("tr")[1:]
    if not rows:
        logger.info("CORE portal: 0 results for %r (by=%s)", query, by)
        return "COREO"

    for row in rows:
        cells = row.find_all("td")
        if len(cells) > rank_idx:
            rank_text = cells[rank_idx].get_text(strip=True).lower()
            tag = _RANK_MAP.get(rank_text, "COREO")
            logger.info("CORE portal: %r → %s (raw: %r)", query, tag, rank_text)
            return tag

    return "COREO"
