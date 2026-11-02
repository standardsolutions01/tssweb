# TSS Website — Project Brief & Rules

> This file is read automatically by Claude Code (and should be read by any
> developer) before working on this repo. **Part A** is the current, agreed
> state of the project and **overrides Part B** wherever they differ.
> **Part B** is the owner's original build brief, kept for reference.

---

# PART A — Current decisions (updated 2 November 2026)

## A1. Working with the owner
- Owner: **Syed M. Armagham Zia** — not a developer. Explain every step in plain English, short bullets, tables, white space.
- Never ask the owner to run terminal commands. Do all code work yourself.
- Before anything goes live, give a short summary of what changed.
- Never commit passwords, API keys, client files or private documents (**the repo is public**).
- UK English spelling throughout.

## A2. Branch workflow
- Development happens on a feature branch (currently `claude/sleepy-einstein-x1ucce`).
- Cloudflare Pages builds a **preview link** for every branch, so the owner can review before going live.
- When the owner says **"shift to main"**, open a pull request from the feature branch into `main` and merge it. `main` = the live website.
- Never push directly to `main` without the owner's go-ahead.

## A3. Business details (single source of truth: `src/config/site.ts`)
| Item | Value |
|---|---|
| Public email | `thestandardsolutions01@gmail.com` (personal Gmail and the earlier `tss01@` address must NOT appear anywhere) |
| WhatsApp / phone | +92 324 344 8929 (the old 0336 number must NOT appear anywhere) |
| Public location | Islamabad, Pakistan (**full address only on Privacy/Terms pages**) |
| Full address (policies only) | 76-B, Street 19, Gulzar-e-Quaid, Rawalpindi, Pakistan |
| Legal form | Sole proprietorship, registration no. D483246-0 |
| Booking link | Google Calendar — always opens in a new tab |
| Enquiry form | Google Form — always opens in a new tab (owner edits the form in Google) |
| Social links | None yet (website only) |

## A4. Design — follow `DESIGN.md` (owner's layout & design brief, 2 Nov 2026)
- **`DESIGN.md` is the design source of truth** and overrides Part B §7. Calm, cosy, minimal; light and white.
- Colours: blue `#004AAD`, red `#FF3131` (thin accents only — never text or buttons), grey `#737373`, ink `#16191F`, light grey `#F6F7F9`, deep navy `#0D1B2E` (footer only).
- **One font: Albert Sans** (self-hosted), weights 400/500/600. Body 18px / 1.7.
- All tokens are CSS variables in `src/styles/global.css` (`:root` block) — changing them is a ~2-minute job.
- Logo: header uses the owner's full logo (wordmark crop `public/images/logo-header.webp`); footer uses a white text wordmark; originals in `brand/`.
- **Phasing:** Phase 1 (global components + Home) awaits owner approval. Phase 2 applies the templates to all other pages (service template, Fees & Process, How it works, Insights, Article, Contact form, About, 404).

## A5. Content decisions (override Part B §3, §8)
- **Pricing:** every service shows **"Contact for pricing"** — no `[PRICE]` placeholders.
- **Contact:** no embedded form / form endpoint. Buttons link to the Google Form, Google Calendar, WhatsApp and email.
- **About page:** written from the **company's perspective**, with a short leadership section for the founder's credentials.
- **Testimonials:** stored in `src/data/testimonials.ts` with `approved: false`. The section is hidden until at least one real, client-approved quote is set to `approved: true`.
- **Policies:** Terms of Service, Privacy Policy, Refund Policy and Complaints Handling & Service Delivery come **word for word from the owner's "Policy and Guidelines" document** (`src/content/policies/`). Do not reword them. Only changes made: contact details are tokens (`{{EMAIL}}` etc.) so they match `site.ts`; the old 0336 number became the WhatsApp number; cross-references link to the other policy pages; and the Australia tax line was aligned with rule A6 (bookkeeping & advisory only).
- **Client count:** "140+ clients" is confirmed by the owner (`SITE.clientsServed`). Do not use any other figure.

## A6. Compliance wording (strict — enforced automatically)
- ❌ Never use "Chartered", "Chartered Accountants", "ACCA", "ICAEW", "CIMA" about TSS or the founder. (`scripts/post-build-checks.mjs` fails the build if these appear.)
- ❌ Never claim to be a US "Registered Agent" — registered-agent service is provided **via partner**.
- ❌ Never claim to be an Australian "Tax Agent" or "BAS Agent" — Australia = bookkeeping & advisory only.
- ✅ UK formation: filings are handled **with/through authorised formation partners**.
- ✅ Footer disclaimer (in `src/config/site.ts` → `DISCLAIMER`) must stay on every page.
- ❌ No fake testimonials, fake client logos or invented statistics.
- ✅ Blog posts: no unverified fees or legal claims — say "check current fees on the official site".

## A7. Security rules
- The site loads **nothing from other websites**. Only small self-hosted scripts run (`src/scripts/`: search, header shrink, fade-up, floating WhatsApp). The site must still work if they fail.
- No inline `<script>` or `style=""` (enforced by the build). CSP allows `'wasm-unsafe-eval'` only for Pagefind search.
- Strict security headers live in `public/_headers`. Any new third-party tool must be added to the Content-Security-Policy deliberately.
- Every external link opens in a new tab with `rel="noopener noreferrer"` (use `src/components/ExternalLink.astro`; enforced by the build checks).
- Pin exact dependency versions; Dependabot raises update PRs; GitHub Actions builds every push.
- See `docs/SECURITY.md` for the full list, including what the owner should do on their accounts.

## A8. Automatic checks (run on every build — Cloudflare won't publish if they fail)
Banned wording · broken internal links · exactly one H1 per page · title ≤ 60 chars · description ≤ 155 chars · external links open in a new tab safely · no inline scripts/styles · warning for visible `[PLACEHOLDER]` text. The build also creates the Pagefind search index.

---

# PART B — Original build brief (reference)

## 1. About the owner (read first)
- Owner: **Syed M. Armagham Zia** — not a developer. Explain every step in plain English, short bullets.
- Never ask the owner to run terminal commands. Do all code work yourself.
- Before anything goes live, give a short summary of what changed.
- Never commit passwords, API keys, client files or private documents (repo is **public**).

## 2. Business
| Item | Detail |
|---|---|
| Brand | **The Standard Solutions** (short: **TSS**) |
| Domain | `thestandardsolutions.com` (DNS on Cloudflare) |
| Base | Islamabad / Rawalpindi, Pakistan |
| Markets | UK (primary) · UAE · Australia · US · Pakistan |
| Positioning | Company formation + accounting + finance/controller support — one partner from registration to reporting |
| Tagline | "Simplifying your finances — one ledger at a time" |

### Founder credentials (use on About page)
- ACMA — Associate Management Accountant (ICMA Pakistan)
- Certified Xero Advisor · Advanced QuickBooks ProAdvisor
- 7+ years serving UK, US, UAE, Australian and Pakistani clients (CV now says 8+)
- Platforms: Xero, QuickBooks Online, Zoho Books

### Services (one page each)
1. **UK Company Formation** (UK Ltd for non-residents / Pakistani founders)
2. **US LLC Formation** (for non-residents; incl. EIN & banking guidance)
3. **Pakistan Company Registration** (SECP, NTN, FBR)
4. **Bookkeeping & Accounting** (Xero, QuickBooks, Zoho; monthly closes, reconciliations)
5. **Pro Forma & Financial Models** (projections, investor/bank pro formas)
6. **Fractional CFO & Financial Controller Support**

### Commercial terms
- One-time setup services: **60% advance, 40% on completion**
- Card payments: Safepay (coming soon — placeholder only)

## 3. Tech setup
- Framework: **Astro** (static output)
- Hosting: **Cloudflare Pages** (build command `npm run build`, output folder `dist`)
- No database, no logins, no paid plugins
- Contact form: free form service — *superseded: Google Form link (A5)*
- WhatsApp click-to-chat button on every page
- Mobile-first, fully responsive; target Lighthouse 90+ on all scores

## 4. Site structure (URLs)
| Page | URL |
|---|---|
| Home | `/` |
| UK Company Formation | `/uk-company-formation/` |
| US LLC Formation | `/us-llc-formation/` |
| Pakistan Company Registration | `/pakistan-company-registration/` |
| Bookkeeping & Accounting | `/bookkeeping-accounting/` |
| Pro Forma & Financial Models | `/financial-modelling/` |
| Fractional CFO & Controller | `/fractional-cfo/` |
| Pricing | `/pricing/` |
| About | `/about/` |
| Contact | `/contact/` |
| Blog (index + posts) | `/blog/` |
| Privacy Policy / Terms | `/privacy/`, `/terms/` (plus `/refund-policy/`, `/complaints/`) |

**Each service page:** hero → who it's for → what's included → process → pricing → FAQs (5+) → call to action → related services.

## 5. SEO requirements
- Unique `<title>` (≤60 chars) and meta description (≤155 chars) per page
- One H1 per page containing the main keyword
- Title format: `[Service] for [Audience/Country] | The Standard Solutions` (falls back to `| TSS` when over 60 chars)
- Auto-generated sitemap and `robots.txt`
- Schema: `Organization`/`ProfessionalService` (site-wide), `Service`, `FAQPage`, `BreadcrumbList`
- Open Graph + Twitter card tags
- Clean URLs, compressed images (WebP), alt text on all images
- Internal links between related services

### Main keyword per page
| Page | Primary keyword |
|---|---|
| UK formation | UK company formation for non-residents |
| US LLC | US LLC formation for non-residents |
| PK registration | SECP company registration Pakistan |
| Bookkeeping | outsourced bookkeeping services UK |
| Financial models | pro forma financial statements / startup financial model |
| Fractional CFO | fractional CFO services UK |

## 6. Compliance — see A6 (unchanged)

## 7. Design — *superseded by A4*
Original: dark, premium (navy/charcoal + gold), serif headings; CTAs "Book a Free Consultation" and "Chat on WhatsApp" (kept).

## 8. Placeholders — see `PLACEHOLDERS.md`

## 9. Starter blog posts (done)
1. How to Register a UK Limited Company from Pakistan (Step-by-Step)
2. US LLC for Non-Residents: Formation, EIN and Banking Explained
3. Pro Forma Financial Statements: What Investors and Banks Expect

Each: 1,200–1,800 words, original, H2/H3 structure, FAQ section, internal links to service pages, no unverified fees or legal claims.

## 10. Workflow rules
- Commit with clear messages (e.g. "Add US LLC page")
- After each build step, give the owner a short bullet summary + what needs their input
- Deployment: see `docs/DEPLOYMENT.md` (Cloudflare Pages + domain + Google Search Console)
