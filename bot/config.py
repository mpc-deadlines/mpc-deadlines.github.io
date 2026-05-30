import os
from dotenv import load_dotenv

load_dotenv()

# Telegram
TELEGRAM_BOT_TOKEN: str = os.environ["TELEGRAM_BOT_TOKEN"]

# Comma-separated chat IDs or @usernames the bot responds to.
# e.g. "@mpc_deadlines,-1001234567890"
# Leave empty to respond to ALL chats (useful for testing).
_ALLOWED_RAW = os.environ.get("ALLOWED_CHATS", "")
ALLOWED_CHATS: set[str] = (
    {c.strip() for c in _ALLOWED_RAW.split(",") if c.strip()}
    if _ALLOWED_RAW else set()
)

# Anthropic
ANTHROPIC_API_KEY: str = os.environ["ANTHROPIC_API_KEY"]

# GitHub
GITHUB_TOKEN: str = os.environ["GITHUB_TOKEN"]
GITHUB_REPO: str = os.environ.get("GITHUB_REPO", "mpc-deadlines/mpc-deadlines.github.io")
GITHUB_BASE_BRANCH: str = os.environ.get("GITHUB_BASE_BRANCH", "main")
CONFERENCES_FILE: str = os.environ.get("CONFERENCES_FILE", "_data/conferences.yml")
