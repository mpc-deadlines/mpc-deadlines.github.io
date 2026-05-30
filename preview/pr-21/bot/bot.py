"""
Telegram bot entry point.

The bot listens for messages in any configured chat (channel, group, or DM).
When a message contains a URL it kicks off the full pipeline and replies
with a PR link or an error explanation.
"""
from __future__ import annotations

import logging
import re

from telegram import Update
from telegram.ext import (
    Application,
    MessageHandler,
    filters,
    ContextTypes,
)

from config import TELEGRAM_BOT_TOKEN, ALLOWED_CHATS
from pipeline import process_url

logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

_URL_RE = re.compile(r"https?://[^\s<>\"']+")


def _is_allowed(update: Update) -> bool:
    """Return True if this chat is in the allowed list (or no list is configured)."""
    if not ALLOWED_CHATS:
        return True
    chat = update.effective_chat
    if chat is None:
        return False
    allowed_by_id = str(chat.id) in ALLOWED_CHATS
    allowed_by_username = bool(chat.username) and f"@{chat.username}" in ALLOWED_CHATS
    return allowed_by_id or allowed_by_username


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    message = update.channel_post or update.message
    if not message:
        return
    if not _is_allowed(update):
        return

    text = message.text or message.caption or ""
    urls = _URL_RE.findall(text)
    if not urls:
        return

    # Process first URL in the message; strip trailing punctuation
    url = urls[0].rstrip(".,)")
    logger.info("Processing URL: %s", url)

    # Build a link back to the Telegram message for the PR body
    chat = update.effective_chat
    msg_link = ""
    if chat and chat.username:
        msg_link = f"https://t.me/{chat.username}/{message.message_id}"

    reply = await process_url(url, msg_link)

    await message.reply_text(
        reply,
        parse_mode="Markdown",
        disable_web_page_preview=True,
    )


def main() -> None:
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()

    app.add_handler(
        MessageHandler(
            (
                filters.ChatType.CHANNEL
                | filters.ChatType.GROUPS
                | filters.ChatType.PRIVATE
            )
            & (filters.TEXT | filters.CAPTION),
            handle_message,
        )
    )

    logger.info("MPC Deadlines bot started. Polling for updates...")
    app.run_polling(allowed_updates=["channel_post", "message"])


if __name__ == "__main__":
    main()
