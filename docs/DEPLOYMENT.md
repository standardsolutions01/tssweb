# Deployment Guide — GitHub → Cloudflare Pages → thestandardsolutions.com

> Written for a non-technical owner. Every step is a click — **no terminal commands**.
> Screens at Cloudflare and Google change occasionally; if a button name differs slightly, look for the closest match.

---

## 0. The big picture

| Piece | Job | Analogy |
|---|---|---|
| **GitHub** (`standardsolutions01/tssweb`) | Stores the website's files and their full history | The filing cabinet |
| **Cloudflare Pages** | Reads the files from GitHub, builds the website and hosts it worldwide | The printer + the shop window |
| **Cloudflare DNS** | Points `thestandardsolutions.com` to the hosted website | The street sign |
| **Google Search Console** | Tells Google your site exists and shows search performance | Registering with the directory |

**What happens on every change:**
1. A change is saved ("pushed") to GitHub.
2. Cloudflare notices within seconds and rebuilds the site (about 1 minute).
3. If the change was on **`main`** → it goes live on your domain.
   If it was on any **other branch** → you get a private **preview link** to check first.

You never copy-paste code. GitHub and Cloudflare talk to each other automatically once connected (Part 2).

---

## Part 1 — Before you start (one-time checklist)

| ✔ | Item |
|---|---|
| ☐ | You can log in to **GitHub** (account that owns `standardsolutions01`) |
| ☐ | You can log in to **Cloudflare** (account where `thestandardsolutions.com` DNS is managed) |
| ☐ | **Two-factor authentication (2FA)** is on for both — see `docs/SECURITY.md` |
| ☐ | Claude has created the **`main`** branch after you said **"shift to main"** |

> **Why `main` first?** Cloudflare asks which branch is the "production" (live) branch. That should be `main`, so it must exist before you connect.

---

## Part 2 — Connect GitHub to Cloudflare Pages (one time, ~10 minutes)

1. Go to **https://dash.cloudflare.com** and log in.
2. In the left menu, click **Workers & Pages** (it may sit under **Compute**).
3. Click **Create** (or **Create application**).
4. Choose the **Pages** tab → click **Import an existing Git repository** (or **Connect to Git**).
5. Click **Connect GitHub**. A GitHub window opens:
   - Choose the **standardsolutions01** account.
   - Choose **Only select repositories** → pick **tssweb**. *(More secure than "All repositories".)*
   - Click **Install & Authorize**.
6. Back in Cloudflare, select **tssweb** → click **Begin setup**.
7. Fill in the settings exactly:

   | Setting | Value |
   |---|---|
   | Project name | `tssweb` |
   | Production branch | `main` |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |
   | Environment variable (optional) | Name `NODE_VERSION`, value `22.23.4` |

8. Click **Save and Deploy**. Wait ~1–2 minutes until it says **Success**.
9. Cloudflare shows a link like **`https://tssweb.pages.dev`** — open it. This is your website, not yet on your domain. **Review it here.**

> **If the build fails:** open the build log, copy the red error text and paste it to Claude. The site has built-in safety checks; a failed build means nothing broken went live.

---

## Part 3 — Attach your domain (thestandardsolutions.com + www)

Because your DNS is already on Cloudflare, this is mostly automatic.

### 3a. The main domain
1. In **Workers & Pages** → click the **tssweb** project.
2. Open the **Custom domains** tab → **Set up a custom domain**.
3. Type `thestandardsolutions.com` → **Continue**.
4. Cloudflare shows the DNS record it will create → click **Activate domain**.
   - If it warns that a record already exists (for example an old Gamma or parking record), go to **DNS → Records** for the domain, note down and delete the old `A`/`CNAME` record for `@`, then repeat this step.
5. Status changes from *Initializing* to **Active** (usually minutes; up to 24 hours).

### 3b. The www version
1. Same screen → **Set up a custom domain** → type `www.thestandardsolutions.com` → **Continue** → **Activate domain**.

### 3c. Send www visitors to the main domain (recommended)
1. In Cloudflare, open the **thestandardsolutions.com** domain (not the Pages project).
2. Go to **Rules** → **Redirect Rules** (or **Rules → Overview → Templates**).
3. Choose the template **"Redirect from WWW to root"** → **Deploy**.

### 3d. Security settings for the domain (2 minutes)
| Where (inside the domain) | Setting |
|---|---|
| **SSL/TLS → Overview** | Encryption mode **Full (strict)** |
| **SSL/TLS → Edge Certificates** | **Always Use HTTPS: On** · **Minimum TLS Version: 1.2** |
| **DNS → Settings** | **DNSSEC: Enable** (follow the on-screen step if your registrar is not Cloudflare) |
| **Security → Bots** | **Bot Fight Mode: On** |

✅ Visit **https://thestandardsolutions.com** — your new site should load with a padlock.

---

## Part 4 — Google Search Console (get found on Google)

1. Go to **https://search.google.com/search-console** and sign in with the business Google account.
2. Click **Add property** → choose **Domain** (left box) → type `thestandardsolutions.com` → **Continue**.
3. Google shows a **TXT record** starting with `google-site-verification=…`.
   - If Google offers **"Start verification"** with Cloudflare, you can click it and approve — it adds the record for you. Otherwise:
4. **Copy** the whole TXT value.
5. In another tab, open **Cloudflare → thestandardsolutions.com → DNS → Records → Add record**:

   | Field | Value |
   |---|---|
   | Type | `TXT` |
   | Name | `@` |
   | Content | *(paste the google-site-verification value)* |
   | TTL | Auto |

6. Click **Save**. Go back to Google → click **Verify**. (If it fails, wait 10 minutes and try again.)
7. In Search Console, open **Sitemaps** (left menu) → enter `sitemap-index.xml` → **Submit**.
8. Optional: **URL Inspection** → paste `https://thestandardsolutions.com/` → **Request indexing**.

Google usually starts showing pages within a few days to a few weeks.

---

## Part 5 — Day-to-day: how a change goes live

| Step | Who | What |
|---|---|---|
| 1 | You | Ask Claude for the change |
| 2 | Claude | Makes it on a branch and gives you the **preview link** (`https://<branch>.tssweb.pages.dev`) |
| 3 | You | Check the preview on phone and laptop |
| 4 | You | Say **"shift to main"** |
| 5 | Claude | Opens a pull request into `main` and merges it |
| 6 | Cloudflare | Rebuilds and publishes to thestandardsolutions.com (~1–2 min) |

**Undo a bad release:** Cloudflare → **Workers & Pages → tssweb → Deployments** → find the previous good deployment → **⋯ → Rollback to this deployment**. Instant, no code needed.

---

## Part 6 — Make `main` the default branch on GitHub (one time, after "shift to main")

1. GitHub → **standardsolutions01/tssweb** → **Settings** → **General**.
2. Under **Default branch**, click the ⇄ switch icon → choose **main** → **Update** → confirm.

Then protect it (stops accidental or malicious changes going straight live):

1. **Settings → Branches → Add branch ruleset** (or **Add rule**).
2. Name: `protect-main` · Target: `main` · Enforcement: **Active**.
3. Tick: **Require a pull request before merging**, **Block force pushes**, **Restrict deletions**, and (optional) **Require status checks to pass** → add **build**.
4. **Save**.
