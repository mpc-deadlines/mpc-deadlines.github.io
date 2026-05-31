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

# If parsed text is shorter than this the page is almost certainly a JS shell
_MIN_USEFUL_CHARS = 200


async def scrape(url: str) -> str:
    """
    Return up to 8 000 chars of meaningful text from *url*.

    Fallback chain:
    1. Direct fetch (with browser headers)
    2. If 404 or JS-only shell → try Google Cache
    3. SSL failure at any step → retry without verification
    """
    try:
        html = await _fetch(url, verify=True)
    except httpx.HTTPStatusError as exc:
        if exc.response.status_code == 404:
            logger.warning("404 for %s — trying Google Cache", url)
            return await _scrape_via_cache(url)
        raise

    text = _parse(html)

    # Detect JS-only shells: page loaded but has almost no readable content
    if len(text) < _MIN_USEFUL_CHARS:
        logger.warning("Page appears JS-rendered (%d chars) for %s — trying Google Cache", len(text), url)
        try:
            cached = await _scrape_via_cache(url)
            if len(cached) >= _MIN_USEFUL_CHARS:
                return cached
        except Exception as cache_exc:
            logger.warning("Google Cache also failed: %s", cache_exc)

    if len(text) < _MIN_USEFUL_CHARS:
        raise ValueError(
            "Page appears to be JavaScript-rendered and no cached version was found. "
            "Try linking directly to the CFP page instead."
        )

    return text


async def _scrape_via_cache(url: str) -> str:
    """Attempt to fetch via Google Cache."""
    cache_url = f"https://webcache.googleusercontent.com/search?q=cache:{url}&hl=en"
    logger.info("Fetching Google Cache: %s", cache_url)
    html = await _fetch(cache_url, verify=True)
    return _parse(html)


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
        if verify and any(h in str(exc).lower() for h in _SSL_HINTS):
            logger.warning("SSL verification failed for %s — retrying without verification", url)
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
