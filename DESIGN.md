# TSS Website — Layout & Design Instructions (for Claude Code)

> **Scope:** layout, look and feel only. Content, SEO and compliance rules stay as in `CLAUDE.md`.
> **Overrides:** this file **replaces Section 7 (Design)** of the earlier brief. Ignore "dark navy + gold" — the site is **light, white and calm**, using the official brand sheet below.
> Save this file in the repo as `DESIGN.md` and follow it for every page.

---

## 1. Design goal (one line)

**Calm, cosy, minimal.** A visitor should feel relaxed, find any service in **2 clicks or less**, and always see how to reach us.

### Feeling words
- Quiet · spacious · warm · trustworthy · uncluttered
- Think "well-kept private office", not "busy sales page"

### Reference sites — what to take, what to avoid

| Site | Take | Avoid |
|---|---|---|
| propactglobal.com | Clear audience cards · simple "how it works" · repeated soft CTA · plain footer | Stock photos of people high-fiving · popups · busy top bar |
| planetaryscale.co | Uppercase small section labels · clean service grid · tidy resource/article cards · anchor-style nav | 16-item service wall · logo carousels · dense team rows |
| Old TSS Gamma page | Card-based sections · WhatsApp + "Discovery Call" CTAs · policies grouped together | Presentation-slide feel · "Made with Gamma" · long software paragraphs |

---

## 2. Brand tokens (from the official TSS Brand Sheet — use exactly)

### Colours
| Token | Hex | Use |
|---|---|---|
| `--tss-blue` | `#004AAD` | Primary: buttons, links, key headings |
| `--tss-red` | `#FF3131` | **Accent only** — thin lines, small arcs. Never body text, never buttons |
| `--tss-grey` | `#737373` | Labels, secondary text |
| `--ink` | `#16191F` | Body text |
| `--light-grey` | `#F6F7F9` | Alternate section backgrounds |
| `--deep-navy` | `#0D1B2E` | Footer only |
| `--white` | `#FFFFFF` | Main background |

- Page is **~80% white / light grey**. Blue is used sparingly. Red appears only as a fine accent.

### Typography
- **One font: Albert Sans** (Google Fonts, self-hosted). Weights: 400, 500, 600 only.
- Body: **18px**, line-height **1.7**, max line length **68 characters** (~680px).
- Headings: weight 500–600, never heavier. Generous size, calm — not shouty.
  - H1: 48–56px desktop / 34px mobile
  - H2: 34–38px / 26px
  - H3: 22px / 20px
- **Section labels:** UPPERCASE, 12–13px, letter-spacing **0.25em**, `--tss-grey` — echoes "STANDARD" in the logo (e.g. `COMPANY FORMATION · ACCOUNTING`).
- UK English, sentence case for headings.

### Logo
- Use the full logo (`brand/` folder) in the header on **white only**; TSS monogram for favicon.
- Clear space around logo ≥ height of the word "SOLUTIONS". No shadows, no recolouring, never on blue/red/photos.
- Footer (navy background): use a **simple white text wordmark** "The Standard Solutions", not the logo image.

---

## 3. Spacing & shape (the "calm" comes from here)

| Element | Rule |
|---|---|
| Section padding | **120px** top/bottom desktop · **72px** mobile |
| Content width | Max **1120px**; text blocks max **680px** |
| Grid | 12 columns, 32px gutters |
| Card padding | 32px |
| Corner radius | **16px** cards · **999px** (pill) buttons |
| Borders | 1px `#E6E8EC` — soft, never dark |
| Shadows | None, or very soft (`0 1px 2px rgba(0,0,0,0.04)`) |
| Alternating sections | white → `#F6F7F9` → white |

- **One idea per section.** Never more than 3 cards per row on desktop.
- Lots of empty space is intentional — do not fill it.

---

## 4. Header & navigation

- **Sticky, white, thin** (72px tall; shrinks to 60px on scroll), soft bottom border.
- Left: logo. Centre: menu. Right: 🔍 search icon + **"Book a Free Consultation"** pill button (blue).
- Menu items (max 5):
  1. **Services** ▾ (dropdown — 2 groups)
     - *Set up:* UK Company Formation · US LLC Formation · Pakistan Company Registration
     - *Run & grow:* Bookkeeping & Accounting · Pro Forma & Financial Models · Fractional CFO & Controller
  2. **How it works**
  3. **About**
  4. **Insights** (blog)
  5. **Contact**
- Dropdown = simple white panel, two columns, each item with a one-line description (from the brand sheet).
- **Mobile:** hamburger → full-screen white menu, large tap targets (min 48px), search bar at the top, CTA button at the bottom.
- No top utility bar, no social icons in header.

---

## 5. Search (must-have)

- Use **Pagefind** (free, static, works with Astro — no server).
- Opens as a **centred overlay** when clicking 🔍 or pressing `/` or `Ctrl/⌘+K`.
- Searches: service pages, FAQs, blog posts.
- Results show page title + short snippet; keyboard navigable.
- Empty state: show 6 service shortcuts + "Chat on WhatsApp".
- Also show a search bar on the **Insights** page and the **404 page**.

---

## 6. Home page — section order

| # | Section | Layout |
|---|---|---|
| 1 | **Hero** | Left-aligned text, lots of space. Label `COMPANY FORMATION · ACCOUNTING · CFO SUPPORT` → H1 "Registration to reporting — one calm partner." → one-line subtext → 2 buttons: **Book a Free Consultation** (solid blue) + **Chat on WhatsApp** (outline). Right side: a thin red arc line motif (echoing the logo), **no stock photo**. |
| 2 | **Trust strip** | One quiet row: `140+ clients · 8+ years · 5 countries` + small grey platform names (Xero · QuickBooks · Zoho Books · MYOB…) as **text, not logos** |
| 3 | **Services** | Label `SERVICES` → 2 groups ("Set up your company" / "Run & grow your finances"), 3 cards each. Card = small line icon, title, one line, "Learn more →" |
| 4 | **Who we help** | 3 audience cards: Founders abroad (UK/US/PK formation) · Small businesses (bookkeeping) · Growing companies (models & CFO) |
| 5 | **How it works** | 4 numbered steps in a horizontal line (vertical on mobile), connected by a thin line: Free consultation → Quote → Set up / onboarding → Ongoing support |
| 6 | **Why TSS** | Light-grey background. 4 short points in a 2×2 grid (qualified accountant · cloud-platform certified · one partner end-to-end · clear 60/40 terms) |
| 7 | **Testimonials** | Hide entire section until real, written-approved testimonials exist. When live: 1 large quote at a time, calm fade, no auto-scroll |
| 8 | **Insights** | 3 latest article cards: category label, title, 2-line excerpt, read time |
| 9 | **FAQ** | 6 questions, accordion (one open at a time), plus links |
| 10 | **Closing CTA** | Centred, light-grey band: "Not sure where to start? Let's talk." + both buttons |
| 11 | **Footer** | See section 9 |

---

## 7. Service page template (same for all 6)

1. **Breadcrumb** (Home › Services › UK Company Formation)
2. **Hero:** label → H1 → 1–2 line summary → 2 buttons
3. **Who it's for:** 3 short cards
4. **What's included:** clean checklist (2 columns desktop)
5. **How it works:** numbered steps (reuse home component)
6. **What you'll need from us / from you:** simple two-column list
7. **Pricing:** small calm box — "**Contact for pricing.** Every quote follows a free consultation. Setup services: 60% advance, 40% on completion. Government and partner fees passed on at cost." + button. **Never show prices.**
8. **FAQs:** accordion, 5+ questions
9. **Related services:** 2–3 cards (e.g. UK formation → Bookkeeping, Fractional CFO)
10. **Closing CTA band**

- **Desktop extra:** a slim sticky side box on the right (from step 3 onward) with "Book a Free Consultation" + "Chat on WhatsApp".
- **"Pricing" page** in the old brief → rename to **"Fees & Process"**: explains how quotes work, payment terms, no numbers.

---

## 8. Other pages

| Page | Layout |
|---|---|
| **About** | Founder intro (photo optional, natural light, no stock) → story (short) → credentials list (approved wording only) → platforms → values (calm, plain, honest) → CTA |
| **How it works** | Expanded steps + timeline expectations + what to prepare |
| **Insights (blog)** | Search bar + category filter pills (Formation · Bookkeeping · CFO · Pakistan) → 3-column card grid → simple pagination |
| **Article** | Single column 680px, table of contents on the right (desktop), estimated read time, related articles, CTA box at the end |
| **Contact** | Two columns: short form (Name, Email, Country, Service dropdown, Message) + contact card (WhatsApp, email, Islamabad, working hours PKT with UK overlap) |
| **Policies** | Terms, Privacy, Refund, Complaints — one clean text layout, grouped under "Policies" in footer |
| **404** | Friendly line + search bar + service links |

---

## 9. Footer

- Background `--deep-navy` `#0D1B2E`, text white / 70% white.
- 4 columns: **Brand** (wordmark + tagline "Simplifying your finances — one ledger at a time") · **Services** (6 links) · **Company** (About, How it works, Insights, Contact) · **Contact** (WhatsApp, email, Islamabad).
- Thin red line (1px, `--tss-red`) at the very top of the footer as the only accent.
- Bottom row: © year · Policies links · disclaimer: *"The Standard Solutions provides accounting, bookkeeping and business-formation support services. We are not a law firm and do not provide legal advice."*

---

## 10. Components (build once, reuse everywhere)

| Component | Style |
|---|---|
| Primary button | Pill, `--tss-blue` fill, white text, 48px tall, slight darken on hover |
| Secondary button | Pill, 1px blue outline, blue text |
| WhatsApp button | Outline style (not green slab); small WhatsApp icon |
| Floating WhatsApp | Bottom-right, small round button, appears after 30% scroll, never covers content on mobile |
| Card | White, 1px soft border, 16px radius, lifts 2px on hover |
| Section label | Uppercase, wide-spaced, grey; optional short red line (24px) before it |
| Icons | **Thin line icons only** (e.g. Lucide), 1.5px stroke, blue |
| Accordion | Plus/minus icon, soft divider lines |

---

## 11. Imagery

- **Minimal imagery.** Prefer white space, thin lines and the red-arc motif from the logo.
- No stock photos of handshakes, high-fives, or people pointing at screens.
- If photos are used: natural, soft, real (founder, desk, Islamabad office) — only when the owner supplies them.
- Simple flag emojis/icons allowed for country services (🇬🇧 🇺🇸 🇵🇰), small and subtle.

---

## 12. Motion (calm, subtle)

- Fade-up on scroll: 8–12px, 400ms, ease-out, **once only**.
- Hover: colour/shadow change only, 200ms.
- No sliders, carousels, auto-playing anything, parallax or popups.
- Respect `prefers-reduced-motion` (turn all motion off).

---

## 13. Accessibility & performance

- Colour contrast WCAG AA minimum; focus rings visible (blue, 2px).
- All interactive elements keyboard-usable; "Skip to content" link.
- Mobile-first; test at 375px, 768px, 1280px.
- Lighthouse 90+ on all four scores; images WebP, lazy-loaded.

---

## 14. Don'ts (quick list)

- ❌ Dark full-page themes or gold accents
- ❌ Red buttons or red text blocks
- ❌ More than 2 buttons side by side
- ❌ Popups, newsletter modals, cookie walls beyond a slim banner
- ❌ Prices anywhere on the site
- ❌ Fake testimonials, client logos or statistics
- ❌ Logo on coloured or photo backgrounds

---

## 15. Owner workflow

- Build the **Home page first**, then send the owner a preview link + 5-bullet summary.
- After approval, apply the same templates to all other pages.
- Keep everything in reusable components so future pages match automatically.

---

## Implementation notes (added by Claude Code)

| Topic | Decision |
|---|---|
| JavaScript | The design needs a little JavaScript (search, header shrink, fade-up, floating WhatsApp, testimonial fade). It is **self-hosted** (no third-party scripts), loaded as external files, and the site still works without it. CSP allows `'wasm-unsafe-eval'` only because Pagefind search uses WebAssembly. |
| Search | Pagefind indexes only areas marked `data-pagefind-body` (service pages, blog posts, home FAQ). Built by `npm run build` into `dist/pagefind/`. Not available in `npm run dev`. |
| One-open accordion | Uses the native `<details name="…">` feature — no JavaScript. |
| Header logo | The owner's full logo, cropped to its wordmark and arc ends (`public/images/logo-header.webp`) so "STANDARD" stays legible in a 72px header. The original circular files stay in `brand/`. |
| Phasing | Phase 1 = global components + Home page (owner review). Phase 2 = service template, Fees & Process, How it works, Insights, Article, Contact form, About, 404. |
