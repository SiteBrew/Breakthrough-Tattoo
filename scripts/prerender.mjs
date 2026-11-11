/*
 * Post-build prerender.
 *
 * Writes dist/<route>/index.html for every route: the built SPA shell with
 * that route's real <head> spliced in and the page's markup rendered into
 * #root. Vercel checks the filesystem before applying the SPA rewrite, so
 * these files are served directly; React then hydrates over them.
 *
 * Two problems this fixes, both visible in the SEO audit:
 *   - <body> was an empty <div id="root">, so crawlers saw nothing and only
 *     one page could be assessed (no links in the HTML to follow).
 *   - SEOHead sets title/description in a useEffect, so every route served
 *     the homepage's metadata and tripped the duplicate-title penalty.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const { routeMeta, SITE, DEFAULT_OG_IMAGE } = await import(
  path.join(ROOT, 'src/data/routeMeta.js')
);
const { render } = await import(path.join(ROOT, 'dist-ssr/entry-server.js'));

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(route, meta) {
  const url = route === '/' ? `${SITE}/` : `${SITE}${route}`;
  const crumbs = route === '/' ? null : {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: meta.title.split(' |')[0], item: url },
    ],
  };

  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${esc(meta.robots || 'index, follow')}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Breakthrough Tattoo" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${esc(DEFAULT_OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(DEFAULT_OG_IMAGE)}" />`,
  ];
  if (crumbs) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(crumbs)}</script>`);
  }
  return tags.map((t) => `    ${t}`).join('\n');
}

const templatePath = path.join(DIST, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[prerender] dist/index.html missing — run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf8');

const MARKER = '<!--PRERENDER_HEAD-->';
const ROOT_DIV = '<div id="root"></div>';
const FALLBACK_RE = /[ \t]*<!--FALLBACK_START-->[\s\S]*?<!--FALLBACK_END-->\n?/;

for (const [label, ok] of [
  [MARKER, template.includes(MARKER)],
  [ROOT_DIV, template.includes(ROOT_DIV)],
  ['FALLBACK block', FALLBACK_RE.test(template)],
]) {
  if (!ok) {
    console.error(`[prerender] ${label} missing from index.html — refusing to emit.`);
    process.exit(1);
  }
}

let written = 0;
for (const [route, meta] of Object.entries(routeMeta)) {
  let html = template.replace(MARKER, headFor(route, meta)).replace(FALLBACK_RE, '');

  const markup = render(route);
  if (/<title>|<meta\b/.test(markup)) {
    console.error(`[prerender] head tags leaked into the body for ${route}.`);
    process.exit(1);
  }
  html = html.replace(ROOT_DIV, `<div id="root">${markup}</div>`);

  const outDir = route === '/' ? DIST : path.join(DIST, ...route.split('/').filter(Boolean));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  written++;
  const words = markup.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(`[prerender] ${route.padEnd(12)} -> ${String(words).padStart(5)} words`);
}

console.log(`[prerender] ${written} routes prerendered.`);
