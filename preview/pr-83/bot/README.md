# MPC Deadlines Telegram Bot

Watches the [@mpc_deadlines](https://t.me/mpc_deadlines) channel. When anyone posts a conference URL it automatically:

1. Scrapes the page
2. Looks up any prior-year entry in `conferences.yml` (to inherit stable tags)
3. Asks Groq (Llama 3.3 70B) to extract structured data and assign tags
4. Scope-checks the event (CFP + MPC topics + peer review)
5. Inserts or upgrades the entry (EXP → EXPCFP → FULL) in alphabetical order
6. Opens a GitHub PR for human review
7. Replies in the channel with the PR link

---

## Setup

### 1. Create the Telegram bot

1. Message [@BotFather](https://t.me/BotFather) → `/newbot`
2. Copy the token into `.env` as `TELEGRAM_BOT_TOKEN`
3. Add the bot to the channel as an **admin** with "Post Messages" permission

Get the channel's numeric ID by forwarding any channel message to [@userinfobot](https://t.me/userinfobot), then add it to `ALLOWED_CHATS`.

### 2. Get a Groq API key

1. Sign up free at [console.groq.com](https://console.groq.com)
2. Go to **API Keys** → **Create API Key**
3. Copy the key into `.env` as `GROQ_API_KEY`

No credit card required — Groq has a free tier.

### 3. Create a GitHub fine-grained PAT

Go to **GitHub → Settings → Developer settings → Fine-grained tokens**.  
Grant on `mpc-deadlines/mpc-deadlines.github.io`:
- **Contents**: Read & Write
- **Pull requests**: Read & Write

### 3. Configure environment

```bash
cp .env.example .env
# Fill in all four secrets
```

### 4. Run

**Docker (recommended):**
```bash
docker compose up -d
```

**Local:**
```bash
pip install -r requirements.txt
python bot.py
```

---

## How tags are assigned

| Tag set | Source |
|---|---|
| Domain (THEORY / PRACT / APPLIED / …) | Copied from prior-year entry; otherwise inferred from CFP topics |
| Type (CNF / JRN / WK / …) | Copied from prior-year entry; otherwise inferred from event format |
| CORE rank (COREAS / COREA / …) | **Always copied from prior-year entry** — CORE rankings don't change. If no prior entry, Claude infers from its training knowledge |
| Status (EXP / EXPCFP) | Determined from what the page contains: full CFP → no tag; dates/venue but no deadline → EXPCFP; announcement only → EXP |

## EXP / EXPCFP logic

```
Page has submission deadline?  ──Yes──▶  FULL  (no status tag)
        │
        No
        │
Page has confirmed dates/venue? ──Yes──▶  EXPCFP
        │
        No
        │
        ▼
       EXP
```

For EXP and EXPCFP entries the bot fills in as much as possible from the page (or prior year), sets `deadline: [TBD]`, and adds an appropriate `comment`.

---

## File structure

```
bot/
├── bot.py            # Telegram bot entry point
├── pipeline.py       # Orchestration (scrape → extract → PR)
├── scraper.py        # Web page fetcher / cleaner
├── extractor.py      # Claude-powered structured extraction
├── yaml_handler.py   # conferences.yml read / insert / update
├── github_pr.py      # GitHub branch + commit + PR creation
├── config.py         # Environment variable loading
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── .env.example
```
