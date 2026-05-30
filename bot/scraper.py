"""Fetch a conference URL and return clean plain text for Claude to parse."""
import httpx
from bs4 import BeautifulSoup

_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (compatible; MPCDeadlinesBot/1.0; "
        "+https://mpc-deadlines.github.io)"
    )
}
_MAX_CHARS = 8000


async def scrape(url: str) -> str:
    """Return up to 8 000 chars of meaningful text from *url*."""
    async with httpx.AsyncClient(follow_redirects=True, timeout=25) as client:
        resp = await client.get(url, headers=_HEADERS)
        resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")

    # Strip boilerplate
    for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
        tag.decompose()

    lines = [
        line.strip()
        for line in soup.get_text(separator="\n").splitlines()
        if line.strip()
    ]
    return "\n".join(lines)[:_MAX_CHARS]
