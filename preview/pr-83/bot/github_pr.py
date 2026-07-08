"""GitHub integration — read conferences.yml, create a branch, commit, open a PR."""
from __future__ import annotations

import re
import logging
from github import Github, GithubException
from config import (
    GITHUB_TOKEN, GITHUB_REPO, GITHUB_BASE_BRANCH, CONFERENCES_FILE,
)

logger = logging.getLogger(__name__)

_gh = Github(GITHUB_TOKEN)
_repo = _gh.get_repo(GITHUB_REPO)


def get_conferences_content() -> tuple[str, str]:
    """Return (decoded_text, blob_sha) of conferences.yml from the base branch."""
    f = _repo.get_contents(CONFERENCES_FILE, ref=GITHUB_BASE_BRANCH)
    return f.decoded_content.decode("utf-8"), f.sha  # type: ignore[union-attr]


def create_pr(
    new_content: str,
    file_sha: str,
    entry: dict,
    action: str,
    source_url: str,
    message_link: str,
) -> str:
    """
    Create a branch, commit updated conferences.yml, open a PR.
    Returns the PR HTML URL.
    """
    name = entry.get("name", "unknown")
    year = entry.get("year", "")
    verb = "Add" if "insert" in action else "Update"

    # Slugify for branch name
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    branch = f"bot/{verb.lower()}-{slug}-{year}"

    # Create branch (handle collision)
    base_sha = _repo.get_branch(GITHUB_BASE_BRANCH).commit.sha
    try:
        _repo.create_git_ref(f"refs/heads/{branch}", base_sha)
    except GithubException as exc:
        if exc.status == 422:          # already exists
            branch += "-b"
            _repo.create_git_ref(f"refs/heads/{branch}", base_sha)
        else:
            raise

    # Commit
    _repo.update_file(
        CONFERENCES_FILE,
        f"{verb} {name} {year}",
        new_content,
        file_sha,
        branch=branch,
    )

    # Build PR body
    tags_str = ", ".join(entry.get("tags", []))
    deadlines = entry.get("deadline", ["TBD"])
    deadline_str = ", ".join(deadlines) if isinstance(deadlines, list) else str(deadlines)

    source_line = f"[{source_url}]({source_url})"
    origin_line = (
        f"[Telegram message]({message_link})" if message_link else "Telegram channel"
    )

    body = f"""\
## {name} {year} — {action}

| Field | Value |
|---|---|
| Source URL | {source_line} |
| Posted in | {origin_line} |
| Action | `{action}` |
| Tags | `{tags_str}` |
| Deadline(s) | `{deadline_str}` |
| Date | `{entry.get('date', 'TBD')}` |
| Place | `{entry.get('place', 'TBD')}` |

### YAML preview
```yaml
{_preview_yaml(entry)}
```

### Before merging, please verify
- [ ] Conference name and description are correct
- [ ] All deadline(s) are accurate and in the right timezone (default AoE / UTC-12)
- [ ] Tags are appropriate (domain, type, CORE rank)
- [ ] Entry is in the correct alphabetical position within its CORE group
- [ ] `comment` field is accurate (notification dates, rounds, etc.)
- [ ] For EXP/EXPCFP entries: placeholder values will be updated once the CFP is live

*🤖 Opened automatically by the [MPC Deadlines Telegram bot](https://t.me/mpc_deadlines)*
"""

    pr = _repo.create_pull(
        title=f"{verb}: {name} {year}",
        body=body,
        head=branch,
        base=GITHUB_BASE_BRANCH,
    )
    logger.info(f"PR created: {pr.html_url}")
    return pr.html_url


def _preview_yaml(entry: dict) -> str:
    """Render the entry in canonical field order, matching conferences.yml style."""
    from yaml_handler import format_entry
    return format_entry(entry)
