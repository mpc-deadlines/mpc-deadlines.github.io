"""
Telegram bot entry point.

The bot listens for messages in any configured chat (channel, group, or DM).
When a message contains a URL it kicks off the full pipeline and replies
with a PR link or an error explanation.
"""
from __future__ import annotations

import asyncio
import logging
import re

from telegram import Update
from telegram.error import Conflict
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
        parse_mode="HTML",
        disable_web_page_preview=True,
    )


async def handle_error(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    """
    Global error handler.
    - Conflict (409): Railway started the new container before the old one stopped.
      Wait 15 s for the old instance to exit, then polling resumes automatically.
    - Everything else: log it.
    """
    if isinstance(context.error, Conflict):
        logger.warning(
            "409 Conflict — previous instance still shutting down. "
            "Waiting 15 s before resuming polling…"
        )
        await asyncio.sleep(15)
        return

    logger.error("Unhandled error: %s", context.error, exc_info=context.error)


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
    app.add_error_handler(handle_error)

    logger.info("MPC Deadlines bot started. Polling for updates...")
    app.run_polling(allowed_updates=["channel_post", "message"])


if __name__ == "__main__":
    main()
