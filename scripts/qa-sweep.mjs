// Full locale and responsive QA for the release-ready Unique landing.
// Audits every published language at phone, tablet and desktop widths.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  HREFLANG,
  PUBLISHED_LOCALES,
  localeUrl,
} from '../src/i18n/index.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const STUDIO = path.resolve(REPO, '../../tools/unique-screenshots');
const { chromium } = await import(
  path.join(STUDIO, 'node_modules/playwright/index.mjs')
);

const ORIGIN = process.env.UNIQUE_QA_ORIGIN ?? 'http://127.0.0.1:4321';
const pageUrl = (locale) => `${ORIGIN}${localeUrl(locale)}`;
const OUT = path.join(REPO, 'qa-sweep');
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: 'xs', width: 320, height: 700 },
  { name: 'mobile', width: 390, height: 844, screenshot: true },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900, screenshot: true },
];

const auditPage = () => {
  const root = document.documentElement;
  const result = {
    overflow: null,
    wideElements: [],
    wrappedHeadlines: [],
    clippedText: [],
    missingNames: [],
    headingOrder: [],
    metadata: {},
  };

  const selectorPath = (element) => {
    const parts = [];
    for (
      let node = element;
      node && node !== document.body && parts.length < 4;
      node = node.parentElement
    ) {
      let part = node.tagName.toLowerCase();
      if (node.id) part += `#${node.id}`;
      else if (typeof node.className === 'string' && node.className.trim()) {
        part += `.${node.className.trim().split(/\s+/).slice(0, 2).join('.')}`;
      }
      parts.unshift(part);
    }
    return parts.join(' > ');
  };

  if (root.scrollWidth > root.clientWidth + 1) {
    result.overflow = {
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
    };
    for (const element of document.querySelectorAll('body *')) {
      const rect = element.getBoundingClientRect();
      if (
        rect.width > 0 &&
        (rect.right > root.clientWidth + 1 || rect.left < -1)
      ) {
        result.wideElements.push({
          selector: selectorPath(element),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
        });
      }
      if (result.wideElements.length >= 12) break;
    }
  }

  for (const element of document.querySelectorAll('h1 span, h2 .line')) {
    const range = document.createRange();
    range.selectNodeContents(element);
    if (range.getClientRects().length > 1) {
      result.wrappedHeadlines.push({
        selector: selectorPath(element),
        text: element.textContent.trim(),
      });
    }
  }

  const clippingSelectors = [
    '.cat-label',
    '.widget .w-text',
    '.q-box',
    '.dlg-title',
    '.dlg-input',
    '.hero-card p',
    '.proof-item',
    '.chip',
    '.action span',
  ].join(',');
  for (const element of document.querySelectorAll(clippingSelectors)) {
    const vertical = element.scrollHeight - element.clientHeight;
    const horizontal = element.scrollWidth - element.clientWidth;
    if (vertical > 4 || horizontal > 4) {
      result.clippedText.push({
        selector: selectorPath(element),
        vertical,
        horizontal,
        text: element.textContent.trim().slice(0, 100),
      });
    }
  }

  for (const element of document.querySelectorAll(
    'a[href], button, input, textarea'
  )) {
    if (element.closest('[hidden]') || element.getClientRects().length === 0) {
      continue;
    }
    const labelText =
      'labels' in element && element.labels
        ? [...element.labels].map((label) => label.textContent).join(' ')
        : '';
    const name = (
      element.getAttribute('aria-label') ||
      element.innerText ||
      element.querySelector?.('img[alt]')?.getAttribute('alt') ||
      labelText ||
      element.getAttribute('placeholder') ||
      ''
    ).trim();
    if (!name) result.missingNames.push(selectorPath(element));
  }

  const headings = [...document.querySelectorAll('h1, h2, h3')];
  let previous = 0;
  for (const heading of headings) {
    const level = Number(heading.tagName.slice(1));
    if (previous && level > previous + 1) {
      result.headingOrder.push({
        from: previous,
        to: level,
        text: heading.textContent.trim(),
      });
    }
    previous = level;
  }

  const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map((script) => {
      try {
        return JSON.parse(script.textContent);
      } catch {
        return null;
      }
    });
  result.metadata = {
    lang: document.documentElement.lang,
    title: document.title,
    h1Count: document.querySelectorAll('h1').length,
    canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
    alternates: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
    descriptions: document.querySelectorAll('meta[name="description"]').length,
    ogImage: document.querySelector('meta[property="og:image"]')?.content ?? null,
    jsonLdCount: jsonLd.filter(Boolean).length,
    jsonLdLanguages: jsonLd.filter(Boolean).map((entry) => entry.inLanguage).filter(Boolean),
    images: document.images.length,
    incompleteImages: [...document.images]
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
  };

  return result;
};

const alive = await fetch(pageUrl('en'))
  .then((response) => response.ok)
  .catch(() => false);
if (!alive) {
  console.error(`No Unique preview found at ${pageUrl('en')}`);
  process.exit(1);
}

const chromePath =
  process.env.PLAYWRIGHT_CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({
  executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
});

const report = {};
let failures = 0;

try {
  for (const locale of PUBLISHED_LOCALES) {
    report[locale] = {};
    for (const viewport of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        reducedMotion: 'reduce',
        deviceScaleFactor: 1,
        hasTouch: viewport.width <= 390,
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      page.on('console', (message) => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      });
      page.on('pageerror', (error) => pageErrors.push(error.message));

      const response = await page.goto(pageUrl(locale), {
        waitUntil: 'networkidle',
      });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(150);

      let menu = null;
      if (viewport.width <= 390) {
        await page.locator('[data-menu-open]').click();
        const visible = await page.locator('[data-menu-sheet]').isVisible();
        await page.keyboard.press('Escape');
        const closed = !(await page.locator('[data-menu-sheet]').isVisible());
        menu = { visible, closed };
      }

      await page.locator('[data-contact-open]:visible').first().click();
      const contactVisible = await page
        .locator('[data-contact-dialog]')
        .isVisible();
      await page.locator('[data-contact-close]').click();

      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 12));
        }
        scrollTo(0, 0);
      });
      await page
        .waitForFunction(
          () => [...document.images].every((image) => image.complete),
          { timeout: 10000 }
        )
        .catch(() => {});

      const audit = await page.evaluate(auditPage);
      const expectedPath = localeUrl(locale);
      const metadataBad =
        audit.metadata.lang !== HREFLANG[locale] ||
        audit.metadata.h1Count !== 1 ||
        audit.metadata.descriptions !== 1 ||
        audit.metadata.alternates !== PUBLISHED_LOCALES.length + 1 ||
        audit.metadata.jsonLdCount < 4 ||
        !audit.metadata.canonical?.endsWith(expectedPath) ||
        !audit.metadata.ogImage?.endsWith(`/og/${locale}.png`) ||
        audit.metadata.incompleteImages.length > 0;
      const interactionBad =
        !contactVisible ||
        (menu && (!menu.visible || !menu.closed));
      const bad =
        response?.status() !== 200 ||
        audit.overflow ||
        audit.wrappedHeadlines.length ||
        audit.clippedText.length ||
        audit.missingNames.length ||
        audit.headingOrder.length ||
        consoleErrors.length ||
        pageErrors.length ||
        interactionBad ||
        metadataBad;

      report[locale][viewport.name] = {
        status: response?.status() ?? null,
        menu,
        contactVisible,
        metadataBad,
        consoleErrors,
        pageErrors,
        ...audit,
      };

      if (viewport.screenshot || bad) {
        await page.screenshot({
          path: path.join(OUT, `${locale}-${viewport.name}.png`),
          fullPage: true,
        });
      }
      if (bad) failures += 1;
      console.log(`${locale}/${viewport.name}`, bad ? 'FLAGGED' : 'clean');
      await context.close();
    }
  }
} finally {
  await browser.close();
}

fs.writeFileSync(
  path.join(OUT, 'report.json'),
  JSON.stringify(report, null, 2)
);
console.log(
  failures
    ? `${failures} locale viewport(s) flagged -> ${OUT}/report.json`
    : `all ${PUBLISHED_LOCALES.length * VIEWPORTS.length} locale viewports clean`
);
process.exitCode = failures ? 1 : 0;
