# The Standard Solutions — Website

Website for **The Standard Solutions (TSS)** · live at **https://thestandardsolutions.com**

Company formation, bookkeeping and finance support for founders in the UK, US, UAE, Australia and Pakistan.

---

## Start here (who should read what)

| You are… | Read |
|---|---|
| **The owner** or a non-technical team member | [`docs/EDITING-GUIDE.md`](docs/EDITING-GUIDE.md) — how to change text, numbers, links |
| **A developer** taking over | This file, then [`CLAUDE.md`](CLAUDE.md) (rules) and [`docs/SECURITY.md`](docs/SECURITY.md) |
| **A marketer / designer / agency** | [`docs/BRAND.md`](docs/BRAND.md) — logo, colours, fonts, approved wording |
| **Setting up hosting / domain / Google** | [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) |
| **Checking what's still missing** | [`PLACEHOLDERS.md`](PLACEHOLDERS.md) |

---

## How the website works (plain English)

```
 You / Claude edit files  ──►  GitHub (stores the code)  ──►  Cloudflare Pages (builds & hosts)  ──►  thestandardsolutions.com
                                   │                               │
                                   │ every branch                  │ every branch gets a private preview link
                                   └── "main" branch = LIVE site   └── "main" is published to the real domain
```

1. The website's files live in this GitHub repository.
2. Cloudflare Pages watches the repository. Whenever something changes, it **builds** the site (turns these files into web pages) and publishes it.
3. Changes on `main` go **live**. Changes on any other branch get a **preview link** for review first.
4. Because the domain's DNS is on Cloudflare, the domain points to Cloudflare Pages automatically once connected.

---

## Technical overview (for developers)

| Item | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static output, **zero client-side JavaScript** |
| Node | 22.23.4 (pinned in `.node-version` / `.nvmrc`) |
| Hosting | Cloudflare Pages — build `npm run build`, output `dist` |
| Styling | Plain CSS. Brand tokens in `src/styles/global.css` (`:root`) + scoped `<style>` in components |
| Fonts | Aptos (if installed on visitor's device) → Albert Sans (self-hosted via `@fontsource`) |
| Content | Service pages = TypeScript data files; blog = Markdown content collection |
| Forms / booking | External: Google Form + Google Calendar (open in new tab). No back end. |
| SEO | Per-page title/description, canonical, Open Graph/Twitter, JSON-LD (ProfessionalService, Service, FAQPage, BreadcrumbList, BlogPosting), sitemap, robots.txt |
| Security | Strict CSP + security headers (`public/_headers`), no third-party scripts, Dependabot, CI build |

### Commands

| Command | What it does |
|---|---|
| `npm ci` | Install exact dependency versions from `package-lock.json` |
| `npm run dev` | Local preview at http://localhost:4321 with live reload |
| `npm run build` | Build to `dist/` **and run the safety checks** (fails on problems) |
| `npm run check` | Run the safety checks again on an existing `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

### Folder map

```
├── CLAUDE.md                 ← project rules & decisions (read before changing anything)
├── PLACEHOLDERS.md           ← open items the owner still needs to supply
├── docs/                     ← handover guides (editing, deployment, security, brand)
├── brand/                    ← original logo files supplied by the owner
├── public/                   ← files served as-is
│   ├── _headers              ← security headers (Cloudflare Pages)
│   ├── _redirects            ← URL redirects (Cloudflare Pages)
│   ├── robots.txt
│   └── images/               ← web-optimised logos + social preview image
├── scripts/
│   └── post-build-checks.mjs ← compliance, links, SEO and new-tab checks
└── src/
    ├── config/site.ts        ← ★ ALL business details & links (email, WhatsApp, Google links…)
    ├── styles/global.css     ← ★ brand colours & fonts
    ├── data/
    │   ├── services/         ← ★ one file per service page (all text, FAQs)
    │   └── testimonials.ts   ← client quotes (hidden until approved)
    ├── content/blog/         ← ★ blog posts (Markdown)
    ├── content/policies/     ← ★ Terms, Privacy, Refund, Complaints (owner's approved wording)
    ├── content.config.ts     ← blog & policy fields
    ├── layouts/              ← page templates (Base, Service, Policy)
    ├── components/           ← header, footer, buttons, FAQ, etc.
    ├── lib/schema.ts         ← Google structured data
    └── pages/                ← one file per URL (index, about, pricing, contact, policies, blog…)
                                [service].astro generates all six service pages
```

★ = the files most edits will touch.

### Conventions
- **External links** must use `src/components/ExternalLink.astro` (adds `target="_blank" rel="noopener noreferrer"`). In Markdown, write a raw `<a … target="_blank" rel="noopener noreferrer">`. The build fails otherwise.
- **Never hard-code** an email, phone number or link in a page — import it from `src/config/site.ts`.
- **One `<h1>` per page.** Page titles are passed to `BaseLayout` *without* the brand; it is appended automatically.
- **Compliance wording** (see `CLAUDE.md` A6) is checked automatically.
- **No inline `<script>` or `style=""`** — the Content-Security-Policy blocks them. Use component `<style>` blocks.
- Keep dependency versions **exact** (`--save-exact`).

### Branches & releases
- Work on a feature branch → Cloudflare builds a preview → owner reviews → merge into `main` via pull request → live.
- GitHub Actions (`.github/workflows/build.yml`) builds every push and pull request; a red ❌ means don't merge.
