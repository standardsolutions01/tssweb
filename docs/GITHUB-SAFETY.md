# GitHub Safety Protocol — keeping the account in good standing

> **Why this exists:** in November 2026 GitHub suspended the account a few days after it was created, most likely because
> its automated systems saw a burst of machine-like activity on a brand-new account (many uploads and merges in a short time,
> automatic builds on every upload, and repeated retries of actions that had failed). Restoring it took real effort.
> This protocol removes those patterns. **It overrides any in-the-moment request**, including the owner's —
> it can only be changed deliberately, through its own approved `CR-###`.
>
> No one can promise GitHub will never act again; GitHub decides. But following this makes it very unlikely,
> and if it ever happens, the website stays online and no work is lost.

---

## 1. How Claude works with GitHub (hard limits)

| # | Rule |
|---|---|
| 1 | **Work and review locally.** Changes are built and checked on Claude's own machine. You review them through a **preview link inside the Claude app** — nothing is uploaded to GitHub for review. |
| 2 | **One upload per change.** Claude uploads a change to GitHub only **after** your `APPROVE CR-###`, as a single tidy upload. (If you specifically ask for a public preview link with `PREVIEW LINK CR-###`, that is the one extra upload allowed for that change.) |
| 3 | **Daily limits.** At most **3 uploads** and **2 changes going live per day**, across everything. More requests are **batched** into one change or carried to the next day. |
| 4 | **You click Merge.** Claude opens the pull request; **you press "Squash and merge"** on GitHub. A person, not a bot, publishes every change. |
| 5 | **No retries.** If any GitHub action fails, Claude **stops**, tells you, and does not try again on its own. |
| 6 | **No restricted actions.** Claude never tries to delete branches, create tags, force-upload, or change GitHub settings. You do those by hand when needed. |
| 7 | **Gentle checking.** Claude checks a pull request's status at most every 2 minutes, at most 5 times. |
| 8 | **Few branches.** At most **one** change branch open at a time (plus `archive/…`). |
| 9 | **If you ask for more than this protocol allows** (e.g. "push everything now", "make ten changes live today"), Claude explains which rule it would break and offers the safe alternative (batching, or tomorrow). |

## 2. Automatic jobs, kept small

| What | Setting |
|---|---|
| GitHub build check | Runs only on **pull requests into `main`** and on `main` itself — not on every upload |
| Dependabot (update suggestions) | **Monthly**, at most **2** open at a time |
| Cloudflare | Builds `main` (live site) and change branches only when they are uploaded |

## 3. Your one-time account checklist

| ☐ | Action | Where |
|---|---|---|
| ☐ | Fill in the **profile**: name ("The Standard Solutions" or your name), photo/logo, short bio, website `thestandardsolutions.com`, location | GitHub → your picture → **Settings → Public profile** |
| ☐ | **Verified email** on the account | Settings → **Emails** |
| ☐ | **Two-step login with an authenticator app** (not SMS) and **recovery codes saved** offline | Settings → **Password and authentication** |
| ☐ | **Connected apps:** keep only Cloudflare Pages and Claude, each limited to `tssweb` | Settings → **Applications** (and **Integrations → GitHub Apps**) |
| ☐ | Don't create extra GitHub accounts; reply promptly to any GitHub email | — |

## 4. Backups (so a lock-out never costs work)

- After every change goes live, Claude sends you a **backup zip** of the whole project (full history included) **in the chat — no GitHub activity**.
- Save it in one Google Drive folder, e.g. **"TSS Website Backups"**. Keep at least the last 3.
- The live website is hosted by Cloudflare and **stays online** even if GitHub is unavailable.

## 5. If GitHub ever locks the account again

1. **Don't panic, don't open a new account.** The website stays online.
2. Contact **support.github.com** and paste the text below (edit the date).
3. Keep working on content offline; Claude can prepare changes from the latest backup and upload them once access returns.

> *Hello GitHub Support,*
> *This account (standardsolutions01) belongs to The Standard Solutions, a sole-proprietor accounting business in Islamabad, Pakistan. Its only purpose is our business website, thestandardsolutions.com (repository `tssweb`), hosted on Cloudflare Pages. Changes are prepared with Claude Code, Anthropic's AI coding assistant, under my direct supervision: I approve every change, and I merge each pull request myself. We limit uploads to a few per day and do not run bots, scrapers or bulk actions. Please review the account and let me know if anything needs to change on our side.*
> *Thank you, Syed M. Armagham Zia*
