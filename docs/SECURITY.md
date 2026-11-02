# Security Guide

> Two parts: **(A)** what is already built into the website, and **(B)** what the owner should switch on in their accounts.
> Most website break-ins happen through **stolen account logins**, not through the website itself, so Part B matters most.

---

## A. Built into the website ✅

| Protection | What it means in plain English | Where |
|---|---|---|
| **Static site, no database, no logins** | There is nothing on the server for an attacker to log in to or break into | Astro static build |
| **Zero JavaScript** | No code runs in visitors' browsers, so there is nothing to hijack | Whole site |
| **No third-party scripts or trackers** | No outside company's code can be injected into the site | Whole site |
| **Content-Security-Policy** | Browsers refuse to run any code or load any file that isn't ours | `public/_headers` |
| **HSTS** | Browsers always use the secure `https://` version | `public/_headers` |
| **Anti-clickjacking** | Other sites can't hide our pages inside theirs to trick visitors | `public/_headers` |
| **Safe external links** | Google Form, Calendar and WhatsApp open in a new tab with `noopener noreferrer`, so they cannot control our page | `ExternalLink.astro` + build check |
| **No secrets in the repo** | `.gitignore` blocks `.env`, keys, PDFs, Word/Excel files and `private/` folders | `.gitignore` |
| **Exact dependency versions** | Builds always use the same reviewed versions (`package-lock.json`) | `package.json` |
| **Dependabot** | GitHub automatically proposes security updates every week | `.github/dependabot.yml` |
| **Automatic build checks** | Every push is built and checked on GitHub before it can go live | `.github/workflows/build.yml` |
| **Minimal CI permissions** | The GitHub build job can only *read* the code | workflow `permissions:` |
| **Preview links hidden from Google** | `*.pages.dev` previews are marked `noindex` | `public/_headers` |
| **security.txt** | Security researchers know how to report a problem | `public/.well-known/security.txt` |
| **Contact form safety note** | Visitors are told not to send passports/bank details via the form | Contact page |

### Rules for anyone changing the code
1. **Never commit** passwords, API keys, tokens, client documents or personal data. The repo is **public**.
2. Before adding any third-party tool (analytics, chat widget, embedded form), check it's really needed, then add its domain to the **Content-Security-Policy** in `public/_headers` deliberately.
3. Install packages only from the official npm registry, with exact versions (`npm install --save-exact`). Avoid little-known packages.
4. Merge Dependabot security PRs promptly after the build passes.
5. Use the `ExternalLink` component for any link to another website.

---

## B. Owner checklist — do these once (≈ 1 hour total)

### 1. Passwords & 2FA (most important)
| ☐ | Action |
|---|---|
| ☐ | Use a **password manager** (e.g. Bitwarden, 1Password) and a **unique** password for every account |
| ☐ | Turn on **2FA with an authenticator app or passkey** (not SMS if avoidable) for: **GitHub**, **Cloudflare**, **Google account (thestandardsolutions01@gmail.com)**, **domain registrar**, **WhatsApp** |
| ☐ | Save each account's **recovery codes** offline (printed or in the password manager) |

### 2. GitHub (`github.com/standardsolutions01/tssweb` → Settings)
| ☐ | Action | Where |
|---|---|---|
| ☐ | **Protect `main`**: require pull request, block force pushes and deletions | Settings → Branches / Rules (see `docs/DEPLOYMENT.md` Part 6) |
| ☐ | Turn on **Dependabot alerts** and **Dependabot security updates** | Settings → Code security |
| ☐ | Turn on **Secret scanning** and **Push protection** (free for public repos) | Settings → Code security |
| ☐ | Cloudflare app limited to **only the tssweb repo** | Profile → Settings → Applications → Installed GitHub Apps |
| ☐ | Review **Collaborators** regularly; remove anyone who no longer needs access | Settings → Collaborators |

### 3. Cloudflare
| ☐ | Action |
|---|---|
| ☐ | 2FA on (My Profile → Authentication) |
| ☐ | SSL/TLS **Full (strict)**, **Always Use HTTPS**, **Min TLS 1.2**, **DNSSEC on**, **Bot Fight Mode on** (see `docs/DEPLOYMENT.md` 3d) |
| ☐ | **Domain auto-renew ON** and **registrar lock ON** (wherever the domain was bought) |
| ☐ | **Stop email spoofing:** while no `@thestandardsolutions.com` mailbox exists, add two DNS TXT records — Name `@`, Content `v=spf1 -all` and Name `_dmarc`, Content `v=DMARC1; p=reject;` (⚠️ change these if you later set up domain email) |

### 4. Google (thestandardsolutions01@gmail.com)
| ☐ | Action |
|---|---|
| ☐ | 2-Step Verification on; run Google's **Security Checkup** |
| ☐ | Google Form: don't ask for passports, bank or card details; keep the responses sheet **private** (share with specific people only) |
| ☐ | Share client documents via Google Drive with **specific people**, never "anyone with the link" |

### 5. WhatsApp
| ☐ | Action |
|---|---|
| ☐ | Use **WhatsApp Business** for +92 324 344 8929 |
| ☐ | Settings → Account → **Two-step verification** → set a PIN |

---

## C. Handing work to someone else (developer, marketer, assistant)

| Do ✅ | Don't ❌ |
|---|---|
| Invite them to GitHub as a **collaborator** (Write role) | Share your GitHub password |
| Invite them to Cloudflare as a **member** with the smallest role needed | Share your Cloudflare password |
| Point them to `README.md` and `CLAUDE.md` | Give access "just in case" |
| Remove their access when the job is done | Leave old access active |
| Ask them to work on a branch and send you the preview link | Let anyone change `main` directly |

## D. Warning signs (phishing)
- Emails saying "your domain expires today", "GitHub security alert — log in now" or "Cloudflare account suspended" with a link. **Never click** — open the website yourself by typing the address.
- Anyone asking for a 2FA code. Nobody legitimate will ever ask.

## E. If something looks wrong
1. **Roll back** the site: Cloudflare → Workers & Pages → tssweb → Deployments → previous deployment → Rollback.
2. **Change passwords** and sign out other sessions on GitHub, Cloudflare and Google.
3. Check GitHub → tssweb → **Commits** for anything you don't recognise.
4. Contact your developer or ask Claude to review the recent changes.
