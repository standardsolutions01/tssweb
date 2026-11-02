/**
 * POST-BUILD SAFETY CHECKS — runs automatically after every build
 * (`npm run build`). If a check fails, the build fails, so Cloudflare
 * will NOT publish a broken or non-compliant site.
 *
 * Checks:
 *  1. Compliance — banned words from CLAUDE.md section 6.
 *  2. Broken internal links — every link to /something/ must exist.
 *  3. SEO — every page has one <h1>, a title ≤ 60 characters and a
 *     meta description ≤ 155 characters.
 *  4. External links — every link to another website must open in a
 *     new tab with rel="noopener noreferrer" (owner's rule + security).
 *  5. No inline JavaScript — the Content-Security-Policy would block it.
 *  6. Unfinished placeholders — warns (does not fail) if "[PLACEHOLDER]"
 *     text is visible on any page.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const BANNED = [/\bChartered\b/i, /\bACCA\b/, /\bICAEW\b/, /\bCIMA\b/];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

const errors = [];
const warnings = [];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const visibleText = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');

  // 1. Compliance
  for (const re of BANNED) {
    if (re.test(html)) errors.push(`${page}: banned wording found (${re}) — see CLAUDE.md section 6`);
  }

  // 2. Internal links
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = join(DIST, href);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    const redirected = href === '/sitemap.xml';
    if (!ok && !redirected) errors.push(`${page}: broken link -> ${href}`);
  }

  // 4. External links open in a new tab, safely
  for (const [tag] of html.matchAll(/<a\s[^>]*href="(?:https?:|mailto:)?\/\/[^"]*"[^>]*>/g)) {
    if (!/target="_blank"/.test(tag) || !/rel="noopener noreferrer"/.test(tag)) {
      errors.push(`${page}: external link must open in a new tab with rel="noopener noreferrer": ${tag}`);
    }
  }

  // 5. No inline executable scripts (only <script src=…> and JSON-LD data are allowed)
  for (const [tag] of html.matchAll(/<script\b[^>]*>/g)) {
    if (!/\ssrc=/.test(tag) && !/type="application\/ld\+json"/.test(tag)) {
      errors.push(`${page}: inline <script> found (blocked by the security policy): ${tag}`);
    }
  }
  if (/\sstyle="/.test(html.replace(/<svg[\s\S]*?<\/svg>/g, ''))) {
    errors.push(`${page}: inline style="" attribute found (blocked by the security policy)`);
  }

  // 3. SEO basics
  if (!page.startsWith('/404')) {
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) errors.push(`${page}: expected exactly 1 <h1>, found ${h1s}`);
    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
    if (!title) errors.push(`${page}: missing <title>`);
    else if (title.length > 60) errors.push(`${page}: title is ${title.length} characters (max 60): "${title}"`);
    const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
    if (!desc) errors.push(`${page}: missing meta description`);
    else if (desc.length > 155) errors.push(`${page}: description is ${desc.length} characters (max 155)`);
  }

  // 6. Placeholders (warning only)
  if (/\[PLACEHOLDER\]/.test(visibleText)) warnings.push(`${page}: contains [PLACEHOLDER] text`);
}

for (const w of warnings) console.warn('⚠️  ' + w);
if (errors.length) {
  for (const e of errors) console.error('❌ ' + e);
  console.error(`\nPost-build checks FAILED (${errors.length} problem(s)). Fix the above before publishing.`);
  process.exit(1);
}
console.log(`✅ Post-build checks passed for ${files.length} pages.`);
