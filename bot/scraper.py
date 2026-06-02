"""Fetch a conference URL and return clean plain text for the LLM to parse."""
import logging
import re
import unicodedata
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

# Invisible / zero-width Unicode characters injected by some sites as fingerprinting
# (IACR uses zero-width spaces inside URLs to prevent easy copying)
_INVISIBLE_RE = re.compile(
    r"[­"          # soft hyphen
    r"​-‏"    # zero-width space, ZWNJ, ZWJ, LRM, RLM
    r"⁠-⁤"    # word joiner, invisible times/plus/separator
    r"  "     # line/paragraph separator
    r"﻿"           # BOM / zero-width no-break space
    r" ]"          # non-breaking space → replace with regular space
)

# Strip tool-call markup so it never bleeds into the LLM prompt
_TOOL_CALL_RE = re.compile(
    r"<function=\w+[^>]*?>[\s\S]*?(?=<function=|\Z)",
    re.DOTALL,
)

# Patterns that indicate a garbage / error page
_GARBAGE_PATTERNS = [
    re.compile(r"java\.(io|lang|util)\.\w+"),          # Java stack traces
    re.compile(r"HttpServlet(Request|Response)"),
    re.compile(r"\bat [a-z][\w.]+\([\w.]+:\d+\)"),     # Java stack frame
    re.compile(r"<function=\w+"),                       # LLM tool-call markup in content
]


def _strip_invisible(text: str) -> str:
    """Remove zero-width / invisible Unicode characters that confuse the LLM."""
    # Replace non-breaking space with regular space, remove the rest
    text = _INVISIBLE_RE.sub(lambda m: " " if m.group() == " " else "", text)
    # Also strip any remaining Unicode control characters (category Cc/Cf)
    text = "".join(
        ch if unicodedata.category(ch) not in ("Cc", "Cf") or ch in "\n\r\t" else ""
        for ch in text
    )
    return text


def _has_binary_garbage(text: str) -> bool:
    """Return True if the first 500 chars have too many non-printable bytes."""
    sample = text[:500]
    bad = sum(1 for c in sample if ord(c) < 32 and c not in "\n\r\t")
    return bad > 8


def _is_garbage(text: str) -> bool:
    if _has_binary_garbage(text):
        return True
    for pattern in _GARBAGE_PATTERNS:
        if pattern.search(text):
            return True
    return False


def _sanitize(text: str) -> str:
    """Strip zero-width chars and LLM tool-call markup."""
    text = _strip_invisible(text)
    text = _TOOL_CALL_RE.sub("", text)
    return text.strip()


async def scrape(url: str) -> str:
    """
    Return up to 8 000 chars of clean, meaningful text from *url*.

    Fallback chain:
    1. Direct fetch (browser headers)
    2. 404 or JS-only shell → Google Cache
    3. Validate quality — reject garbage / binary / invisible-char-heavy pages
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

    # Garbage detection (binary junk, Java errors, tool-call bleed-through)
    if _is_garbage(text):
        logger.warning("Direct fetch returned garbage for %s — trying Google Cache", url)
        cached = await _try_cache(url)
        if cached:
            return cached
        raise ValueError(
            "Could not retrieve clean content from this page. "
            "Try linking directly to the CFP page instead."
        )

    cleaned = _sanitize(text)

    # After sanitisation, log if zero-width chars were stripped
    if len(cleaned) < len(text):
        logger.info(
            "Stripped %d invisible chars from %s", len(text) - len(cleaned), url
        )

    return cleaned


async def _try_cache(url: str) -> str:
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
