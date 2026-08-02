import { SITE_ORIGIN } from '../config.mjs';
import {
  HREFLANG,
  PUBLISHED_LOCALES,
  localeUrl,
} from '../i18n/index.mjs';

export const prerender = true;

const absolute = (locale) => new URL(localeUrl(locale), SITE_ORIGIN).href;
const alternate = (locale) =>
  `    <xhtml:link rel="alternate" hreflang="${HREFLANG[locale]}" href="${absolute(locale)}" />`;

export function GET() {
  const urls = PUBLISHED_LOCALES.map(
    (locale) => `  <url>
    <loc>${absolute(locale)}</loc>
${PUBLISHED_LOCALES.map(alternate).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute('en')}" />
  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
