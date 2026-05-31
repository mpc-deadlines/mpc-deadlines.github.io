"""Fetch a conference URL and return clean plain text for the LLM to parse."""
import logging
import httpx
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/125.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "DNT": "1",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
}
_MAX_CHARS = 8000


async def scrape(url: str) -> str:
    """
    Return up to 8 000 chars of meaningful text from *url*.
    If SSL verification fails (common with academic/govt sites), retries
    without verification and logs a warning.
    """
    text = await _fetch(url, verify=True)
    return _parse(text)


_SSL_HINTS = ("ssl", "certificate", "verify failed", "unknown ca")


async def _fetch(url: str, verify: bool) -> str:
    try:
        async with httpx.AsyncClient(
            follow_redirects=True, timeout=25, verify=verify
        ) as client:
            resp = await client.get(url, headers=_HEADERS)
            resp.raise_for_status()
            return resp.text
    except Exception as exc:
        # If SSL-related and we haven't already disabled verification, retry
        if verify and any(h in str(exc).lower() for h in _SSL_HINTS):
            logger.warning(
                "SSL verification failed for %s — retrying without verification", url
            )
            return await _fetch(url, verify=False)
        raise


def _parse(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
        tag.decompose()
    lines = [
        line.strip()
        for line in soup.get_text(separator="\n").splitlines()
        if line.strip()
    ]
    return "\n".join(lines)[:_MAX_CHARS]
