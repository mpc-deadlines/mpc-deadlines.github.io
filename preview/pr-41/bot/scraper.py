"""Fetch a conference URL and return clean plain text for the LLM to parse."""
import logging
import re
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
_MIN_USEFUL_CHARS = 200

# Patterns that indicate a garbage / error page
_GARBAGE_PATTERNS = [
    re.compile(r"java\.(io|lang|util)\.\w+"),   # Java stack traces
    re.compile(r"HttpServlet(Request|Response)"),
    re.compile(r"at [a-z][\w\.]+\([\w\.]+:\d+\)"),  # Java stack frame
    re.compile(r"<function=\w+"),                # LLM tool-call markup leaked in
]

# Strip tool-call markup from scraped text so it never confuses the LLM
_TOOL_CALL_RE = re.compile(r"<function=\w+[^>]*>.*?(?:</function>|(?=<function=)|\Z)", re.DOTALL)


def _is_garbage(text: str) -> bool:
    """Return True if the text looks like a server error or corrupted cache page."""
    for pattern in _GARBAGE_PATTERNS:
        if pattern.search(text):
            return True
    return False


def _sanitize(text: str) -> str:
    """Remove patterns that would break LLM tool-call parsing."""
    return _TOOL_CALL_RE.sub("", text).strip()


async def scrape(url: str) -> str:
    """
    Return up to 8 000 chars of meaningful text from *url*.

    Fallback chain:
    1. Direct fetch (with browser headers)
    2. If 404 or JS-only shell → try Google Cache
    3. Validate content quality at each step — reject garbage pages
    4. SSL failure → retry without verification
    """
    try:
        html = await _fetch(url, verify=True)
        text = _parse(html)
    except httpx.HTTPStatusError as exc:
        if exc.response.status_code == 404:
            logger.warning("404 for %s — trying Google Cache", url)
            return await _try_cache(url)
        raise

    # JS shell detection
    if len(text) < _MIN_USEFUL_CHARS:
        logger.warning("Page looks JS-rendered (%d chars) for %s — trying Google Cache", len(text), url)
        cached = await _try_cache(url)
        if cached:
            return cached
        raise ValueError(
            "Page is JavaScript-rendered and no cached version was found. "
            "Try linking directly to the CFP page instead."
        )

    # Garbage detection
    if _is_garbage(text):
        logger.warning("Direct fetch returned garbage for %s — trying Google Cache", url)
        cached = await _try_cache(url)
        if cached:
            return cached
        raise ValueError(
            "Could not retrieve clean content from this page. "
            "Try linking directly to the CFP page instead."
        )

    return _sanitize(text)


async def _try_cache(url: str) -> str:
    """
    Try Google Cache. Returns clean text if usable, empty string if not.
    Never raises — caller decides what to do with an empty result.
    """
    cache_url = f"https://webcache.googleusercontent.com/search?q=cache:{url}&hl=en"
    logger.info("Trying Google Cache: %s", cache_url)
    try:
        html = await _fetch(cache_url, verify=True)
        text = _parse(html)
        if len(text) < _MIN_USEFUL_CHARS or _is_garbage(text):
            logger.warning("Google Cache also returned garbage/empty for %s", url)
            return ""
        return _sanitize(text)
    except Exception as exc:
        logger.warning("Google Cache failed for %s: %s", url, exc)
        return ""


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
