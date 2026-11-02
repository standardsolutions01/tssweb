# Editing Guide — how to change things on the website

> For the owner, marketers and assistants. You can ask Claude to make any of these changes for you.
> If you edit on GitHub yourself, always edit on a **branch** and check the preview link before it goes live.

---

## Quick lookup: "I want to change…"

| I want to change… | Edit this file | Time |
|---|---|---|
| Email, WhatsApp number, location | `src/config/site.ts` → `CONTACT` | 1 min |
| Booking (Calendar) or enquiry (Form) link | `src/config/site.ts` → `LINKS` | 1 min |
| Add LinkedIn / Facebook / Instagram | `src/config/site.ts` → `LINKS` (leave `''` to hide) | 1 min |
| Address / registration no. on policies | `src/config/site.ts` → `LEGAL` | 1 min |
| Turn on Safepay card payments | `src/config/site.ts` → `PAYMENTS` | 1 min |
| Footer disclaimer | `src/config/site.ts` → `DISCLAIMER` | 1 min |
| **Brand colours** | `src/styles/global.css` → `:root` block at the top | **2 min** |
| **Fonts** | `src/styles/global.css` → `--font-sans` (+ the `@import` lines) | 5–10 min |
| Text, FAQs or process on a service page | `src/data/services/<service-name>.ts` | 5 min |
| Home page text | `src/pages/index.astro` | 5 min |
| About page | `src/pages/about.astro` | 5 min |
| Pricing page | `src/pages/pricing.astro` | 5 min |
| Privacy Policy / Terms | `src/pages/privacy.astro` / `src/pages/terms.astro` (+ update `LEGAL.policiesLastUpdated`) | 10 min |
| Add a testimonial | `src/data/testimonials.ts` | 2 min |
| Add a blog post | new file in `src/content/blog/` | 15 min+ |
| Logo | replace files in `public/images/` (keep the same names) | 5 min |
| Menu links | `src/config/site.ts` → `NAV` | 1 min |

---

## Editing on GitHub (no software needed)

1. Open **github.com/standardsolutions01/tssweb**.
2. Switch to a work branch (or create one) using the branch dropdown.
3. Open the file → click the **pencil ✏️** icon.
4. Make the change. Keep quote marks `'…'` and commas exactly as they are.
5. Click **Commit changes…** → write a short message (e.g. *"Update WhatsApp number"*) → **Commit**.
6. Wait ~1 minute → open the **preview link** from Cloudflare → check.
7. Happy? Merge into `main` (or ask Claude: **"shift to main"**).

> If something breaks, the build **fails safely** — the live site stays as it was, and Cloudflare/GitHub show a red ❌ with the reason.

---

## Common tasks in detail

### Change the colours (2 minutes)
Open `src/styles/global.css`. At the top:
```css
--brand-blue: #004aad;   /* buttons, links */
--brand-blue-dark: #00377f;  /* button hover — a slightly darker blue */
--brand-red: #ff3131;    /* thin accent lines only */
--brand-grey: #737373;
```
Replace the hex codes. Everything on the site updates. (The logo image keeps its own colours.)

### Add a testimonial
Open `src/data/testimonials.ts`. Replace the `[PLACEHOLDER]` text with the client's **exact** words and name, then change `approved: false` to `approved: true`.
⚠️ Only with the client's **written permission**. Never invent or edit a quote.

### Add a blog post
1. Copy an existing file in `src/content/blog/`.
2. Rename it — the file name becomes the web address (`my-new-post.md` → `/blog/my-new-post/`). Use lowercase and hyphens.
3. Update the top section between the `---` lines:
   - `title` — headline
   - `seoTitle` — optional shorter title for Google (max ~38 characters)
   - `description` — max 155 characters
   - `pubDate` — `YYYY-MM-DD`
   - `faqs` — questions and answers
   - `related` — service page names to link to
4. Write the article below in Markdown (`##` for headings, `-` for bullets).
5. Links to other websites must be written as:
   `<a href="https://example.com" target="_blank" rel="noopener noreferrer">text</a>`

### Wording rules (the build checks these)
- Never write "Chartered", "ACCA", "ICAEW" or "CIMA" about TSS.
- US: registered-agent service is "via our partner".
- Australia: bookkeeping & advisory only — never "tax agent" or "BAS agent" services.
- UK formation: filings "with/through authorised formation partners".
- No fees or legal claims you can't verify — say "check current fees on the official site".
