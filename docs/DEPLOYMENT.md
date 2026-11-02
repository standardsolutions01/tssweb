# Deployment Guide — GitHub → Cloudflare Pages → thestandardsolutions.com

> Written for a non-technical owner. Every step is a click — **no terminal commands**.
> Screens at Cloudflare and Google change occasionally; if a button name differs slightly, look for the closest match.

---

## ✅ Status checklist (last reviewed 2 November 2026)

| Part | Item | Status | How it was confirmed |
|---|---|---|---|
| 1 | `main` branch exists in **tssweb** | ✅ Done | Checked on GitHub |
| 1 | 2FA on GitHub, Cloudflare, Google, WhatsApp | ✅ Done | Owner confirmed |
| 2 | Cloudflare Pages project **tssweb** connected to GitHub, production branch `main` | ✅ Done | Domain shows Active on `tssweb.pages.dev` |
| 2 | Production branch `main` + automatic deployments | ✅ Done | Owner confirmed |
| 2 | Preview builds for other branches switched on | ☐ Owner to confirm | Part 2, step 10 |
| 3a | `thestandardsolutions.com` | ✅ Active · SSL enabled | Owner's screenshot |
| 3b | `www.thestandardsolutions.com` | ✅ Active | Owner confirmed |
| 3c | Redirect `www` → main address | ✅ Done | Owner confirmed |
| 3d | SSL Full (strict) · Always HTTPS · TLS 1.2 · DNSSEC | ✅ Done | Owner confirmed |
| 3d | Bot Fight Mode | ☐ To do | Part 3d |
| 4 | Google Search Console verified | ✅ Done | Owner confirmed |
| 4 | Sitemap `sitemap-index.xml` submitted | ☐ Owner to confirm | Part 4, step 7 |
| 6a | Default branch = `main` | ✅ Done | Checked on GitHub |
| 6b | Ruleset **protect-main** | ✅ Done | Owner confirmed |
| 7 | Dependabot updates #1 and #2 | Open, both passing — waiting for owner's go-ahead | GitHub |

Update this table whenever a step is finished.

---

## 0. The big picture

| Piece | Job | Analogy |
|---|---|---|
| **GitHub** (`standardsolutions01/tssweb`) | Stores the website's files and their full history | The filing cabinet |
| **Cloudflare Pages** (project `tssweb`) | Reads the files from GitHub, builds the website and hosts it worldwide | The printer + the shop window |
| **Cloudflare DNS** | Points `thestandardsolutions.com` to the hosted website | The street sign |
| **Google Search Console** | Tells Google your site exists and shows search performance | Registering with the directory |

**What happens on every change:**
1. A change is saved ("pushed") to GitHub.
2. Cloudflare notices within seconds and rebuilds the site (about 1–2 minutes).
3. If the change is on **`main`** → it goes live on your domain.
   If it is on any **other branch** → you get a private **preview link** to check first.

You never copy-paste code. GitHub and Cloudflare talk to each other automatically.

---

## Part 1 — Accounts (one time)

| ✔ | Item |
|---|---|
| ✅ | You can log in to **GitHub** (account `standardsolutions01`) |
| ✅ | You can log in to **Cloudflare** (account holding `thestandardsolutions.com`) |
| ☐ | **Two-factor authentication (2FA)** is on for both — see `docs/SECURITY.md` |
| ✅ | The **`main`** branch exists in the **tssweb** repository |

> `main` is a **branch inside tssweb**, not a separate repository. Your other repositories are not affected.

---

## Part 2 — Connect GitHub to Cloudflare Pages ✅ (done — kept for reference)

1. **https://dash.cloudflare.com** → log in.
2. Left menu → **Workers & Pages** (may sit under **Compute**).
3. **Create** → **Pages** tab → **Import an existing Git repository**.
4. **Connect GitHub** → account **standardsolutions01** → **Only select repositories** → **tssweb** → **Install & Authorize**.
5. Select **tssweb** → **Begin setup**.
6. Settings:

   | Setting | Value |
   |---|---|
   | Project name | `tssweb` |
   | Production branch | `main` |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |
   | Environment variable (optional) | `NODE_VERSION` = `22.23.4` |

7. **Save and Deploy** → wait for **Success**.
8. The site is also reachable at **`https://tssweb.pages.dev`** (hidden from Google on purpose).
9. If a build fails: open the build log, copy the red error text and send it to Claude. A failed build never replaces the live site.
10. **Check preview builds are on:** **Workers & Pages → tssweb → Settings → Builds** (or *Build & deployments*) → **Branch control** →
    - Production branch: **`main`**
    - Automatic deployments: **Enabled**
    - Preview branches: **All non-Production branches**

---

## Part 3 — Your domain

### 3a. Main address — `thestandardsolutions.com` ✅
Shows **Active · SSL enabled** under **tssweb → Custom domains**. Nothing more to do. (The instruction box that opens under it can be ignored.)

### 3b. `www` version — needs one DNS record
If **www.thestandardsolutions.com** shows **Verifying**:

1. Cloudflare dashboard → click the domain **thestandardsolutions.com** (not the tssweb project).
2. **DNS → Records**.
3. Look for a row named **`www`**:
   - **Exists** (e.g. left over from Gamma/parking) → click **Edit**.
   - **Doesn't exist** → click **Add record**.
4. Fill in:

   | Field | Value |
   |---|---|
   | Type | `CNAME` |
   | Name | `www` |
   | Target | `tssweb.pages.dev` |
   | Proxy status | **Proxied** (orange cloud **on**) |
   | TTL | Auto |

5. **Save** → back to **Workers & Pages → tssweb → Custom domains** → on the **www** row click **Complete DNS setup** → **Check DNS records**.
6. Usually **Active** within 5–30 minutes (up to 24 hours).

### 3c. Send `www` visitors to the main address
Why: one main address is simpler for people and better for Google.
1. Cloudflare → domain **thestandardsolutions.com** → **Rules** → **Redirect Rules** (or **Rules → Overview → Templates**).
2. Template **"Redirect from WWW to root"** → **Deploy**.

### 3d. Security settings for the domain (2 minutes)
| Where (inside the domain) | Setting |
|---|---|
| **SSL/TLS → Overview** | Encryption mode **Full (strict)** |
| **SSL/TLS → Edge Certificates** | **Always Use HTTPS: On** · **Minimum TLS Version: 1.2** |
| **DNS → Settings** | **DNSSEC: Enable** |
| **Security → Settings** → filter **Bot traffic** (older screens: **Security → Bots**) | **Bot Fight Mode: On** — or type "Bot Fight Mode" in the dashboard search bar |

---

## Part 4 — Google Search Console ✅ (verified)

1. **https://search.google.com/search-console** → **Add property** → **Domain** → `thestandardsolutions.com`.
2. Google offers **"Start verification"** with Cloudflare → a Cloudflare screen titled **"Authorize DNS records from Google"** appears (check the address bar shows `dash.cloudflare.com`) → **Authorize**. It adds one **TXT** record (`google-site-verification=…`). This is one-time; Google gets no ongoing access.
3. **If you see "Unauthorized — Error 401"** on a `google.com/a/autodns/…` page: the browser is signed into several Google accounts.
   - Check Cloudflare **DNS → Records** for the TXT record. If it is there, open Search Console in a **private/incognito window**, sign in with the business account only, and click **Verify**.
   - If it is not there, add it by hand: **Add record** → Type `TXT` · Name `@` · Content = the code from Google · TTL Auto → **Save** → **Verify**.
4. ⚠️ **Never delete** the `google-site-verification` TXT record — Google would lose proof of ownership.
5. Left menu → **Sitemaps** → enter `sitemap-index.xml` → **Submit**.
6. Optional: **URL Inspection** → `https://thestandardsolutions.com/` → **Request indexing**.
7. Pages usually appear in Google within days to a few weeks. Check **Pages** and **Performance** monthly.

> Tip: do Google and Cloudflare set-up tasks in a **private window** to avoid account mix-ups.

---

## Part 5 — Day-to-day: how a change goes live

| Step | Who | What |
|---|---|---|
| 1 | You | Ask Claude for the change |
| 2 | Claude | Makes it on the work branch (currently `claude/sleepy-einstein-x1ucce`) |
| 3 | Cloudflare | Builds a **preview** (~2 min) |
| 4 | You | **Workers & Pages → tssweb → Deployments** → find the newest row for that branch → **Visit** / **View details** → check on phone and laptop |
| 5 | You | Say **"shift to main"** |
| 6 | Claude | Opens a **pull request** into `main` and merges it once the `build` check passes (required by the ruleset) |
| 7 | Cloudflare | Publishes to thestandardsolutions.com (~1–2 min) |

**Undo a bad release:** **Workers & Pages → tssweb → Deployments** → previous good **Production** deployment → **⋯ → Rollback to this deployment**. Instant, no code needed.

---

## Part 6 — GitHub settings

### 6a. Default branch = `main` ✅
GitHub → tssweb → **Settings → General → Default branch** → **main**. (Done and confirmed.)

### 6b. Protect `main` (ruleset)
GitHub → tssweb → **Settings → Rules → Rulesets → New ruleset → New branch ruleset**:

| Setting | Value |
|---|---|
| Ruleset Name | `protect-main` |
| Enforcement status | **Active** |
| Bypass list | **Empty** (nobody can skip the rules) |
| Target branches | **Default** (= `main`, because the default branch is `main`) |

Rules to tick:

| Rule | Tick? | Note |
|---|---|---|
| Restrict deletions | ✅ | |
| Block force pushes | ✅ | |
| Require a pull request before merging | ✅ | **Required approvals = 0** — you are the only person, and GitHub won't let you approve your own pull request |
| Require status checks to pass | ✅ | **Add checks** → `build` |
| Restrict creations / updates | ❌ | Would block all changes |
| Require signed commits / deployments / code scanning | ❌ | Not needed |

Click **Create**. If you ever change the default branch away from `main`, change the target to **Include by pattern → `main`**.

---

## Part 7 — Ongoing upkeep (a few minutes a month)

| What | Where | Action |
|---|---|---|
| **Dependabot updates** | GitHub → tssweb → **Pull requests** | Safe tool/security updates. When the `build` check is green, tell Claude **"merge the Dependabot updates"** |
| **Search performance** | Google Search Console → Performance / Pages | Look for errors; send screenshots to Claude if unsure |
| **Domain renewal** | Wherever the domain was bought (or Cloudflare Registrar) | **Auto-renew ON** |
| **Account security** | GitHub, Cloudflare, Google | Review who has access; remove anyone who no longer needs it |
