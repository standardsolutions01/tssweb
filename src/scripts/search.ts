/**
 * Site search (Pagefind). Opens the overlay from any [data-search-open]
 * button, or with "/" or Ctrl/⌘+K. The search index lives in /pagefind/
 * and is created by `npm run build` — it does not exist in `npm run dev`.
 */
type PagefindResult = { url: string; excerpt: string; meta: { title?: string } };
type Pagefind = {
  init?: () => Promise<void> | void;
  options?: (o: Record<string, unknown>) => Promise<void>;
  search: (q: string) => Promise<{ results: { data: () => Promise<PagefindResult> }[] }>;
};

const dialog = document.querySelector<HTMLDialogElement>('[data-search-dialog]');
const input = document.querySelector<HTMLInputElement>('[data-search-input]');
const list = document.querySelector<HTMLUListElement>('[data-search-results]');
const empty = document.querySelector<HTMLElement>('[data-search-empty]');
const status = document.querySelector<HTMLElement>('[data-search-status]');

let pagefind: Pagefind | null = null;
let lastQuery = '';
let timer: number | undefined;

async function loadPagefind(): Promise<Pagefind | null> {
  if (pagefind) return pagefind;
  try {
    const url = '/pagefind/pagefind.js';
    pagefind = (await import(/* @vite-ignore */ url)) as Pagefind;
    await pagefind.options?.({ excerptLength: 24 });
    await pagefind.init?.();
  } catch {
    pagefind = null;
  }
  return pagefind;
}

/** Turn Pagefind's excerpt (text with <mark> tags) into safe DOM nodes. */
function excerptNodes(html: string): Node[] {
  const doc = new DOMParser().parseFromString(`<p>${html}</p>`, 'text/html');
  const nodes: Node[] = [];
  doc.body.firstChild?.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) nodes.push(document.createTextNode(n.textContent ?? ''));
    else if ((n as Element).tagName === 'MARK') {
      const m = document.createElement('mark');
      m.textContent = n.textContent;
      nodes.push(m);
    } else nodes.push(document.createTextNode(n.textContent ?? ''));
  });
  return nodes;
}

function showEmpty(show: boolean) {
  if (empty) empty.hidden = !show;
  if (list) list.hidden = show;
  if (show && status) status.textContent = '';
}

async function runSearch(query: string) {
  lastQuery = query;
  if (!list || !status) return;
  if (!query.trim()) { list.replaceChildren(); showEmpty(true); return; }
  const pf = await loadPagefind();
  if (!pf) { showEmpty(true); status.textContent = 'Search is available on the live website.'; return; }
  const search = await pf.search(query);
  if (query !== lastQuery) return; // a newer search has started
  const data = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
  showEmpty(false);
  list.replaceChildren(
    ...data.map((d) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = d.url;
      const t = document.createElement('span');
      t.className = 'r-title';
      t.textContent = d.meta?.title ?? d.url;
      const s = document.createElement('span');
      s.className = 'r-snippet';
      s.append(...excerptNodes(d.excerpt));
      a.append(t, s);
      li.append(a);
      return li;
    }),
  );
  status.textContent = data.length
    ? `${search.results.length} result${search.results.length === 1 ? '' : 's'}`
    : 'No results. Try another word, or chat with us on WhatsApp.';
  if (!data.length && empty) empty.hidden = false;
}

function open() {
  if (!dialog || dialog.open) return;
  document.querySelector<HTMLDetailsElement>('[data-mobile-nav]')?.removeAttribute('open');
  document.documentElement.classList.remove('menu-open');
  dialog.showModal();
  input?.focus();
  input?.select();
  showEmpty(!input?.value.trim());
  loadPagefind(); // warm up
}

function close() { dialog?.close(); }

document.querySelectorAll('[data-search-open]').forEach((b) => b.addEventListener('click', open));
document.querySelector('[data-search-close]')?.addEventListener('click', close);
document.querySelector('[data-search-form]')?.addEventListener('submit', (e) => {
  e.preventDefault();
  list?.querySelector('a')?.click();
});

// Click on the dark backdrop closes the overlay
dialog?.addEventListener('click', (e) => { if (e.target === dialog) close(); });

input?.addEventListener('input', () => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => runSearch(input.value), 120);
});

// Keyboard: "/" or Ctrl/⌘+K opens; arrows move between results
document.addEventListener('keydown', (e) => {
  const t = e.target as HTMLElement;
  const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
  if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); open(); return; }
  if (e.key === '/' && !typing && !dialog?.open) { e.preventDefault(); open(); return; }
  if (!dialog?.open || (e.key !== 'ArrowDown' && e.key !== 'ArrowUp')) return;
  const visible = (list && !list.hidden ? list : empty)?.querySelectorAll<HTMLAnchorElement>('a') ?? [];
  const items = Array.from(visible);
  if (!items.length) return;
  e.preventDefault();
  const i = items.indexOf(document.activeElement as HTMLAnchorElement);
  if (e.key === 'ArrowDown') (items[i + 1] ?? items[0]).focus();
  else if (i <= 0) input?.focus();
  else items[i - 1].focus();
});
