import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PUBLISHED_LOCALES, landing } from '../src/i18n/index.mjs';
import { LOCALE_COPY } from '../src/data/copy/index.js';
import { heroCards } from '../src/data/localized-screens.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const STUDIO = path.resolve(REPO, '../../tools/unique-screenshots');
const { chromium } = await import(
  path.join(STUDIO, 'node_modules/playwright/index.mjs')
);

const asDataUrl = (relativePath, mime) => {
  const content = fs.readFileSync(path.join(REPO, relativePath));
  return `data:${mime};base64,${content.toString('base64')}`;
};

const html = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const fontRegular = asDataUrl('public/fonts/Poppins-Regular.woff2', 'font/woff2');
const fontBold = asDataUrl('public/fonts/Poppins-Bold.woff2', 'font/woff2');
const fontSerif = asDataUrl(
  'public/fonts/PlayfairDisplay-Regular.woff2',
  'font/woff2'
);
const logo = asDataUrl(
  'public/app/images/svgIcons/unique_alt_dark_en.svg',
  'image/svg+xml'
);
const butterfly = asDataUrl(
  'public/app/images/svgIcons/unique.svg',
  'image/svg+xml'
);
const icon = asDataUrl(
  'public/app/images/icons/alternate_app_icons/default.png',
  'image/png'
);
const phoneBackground = asDataUrl('public/img/tool/reminders-bg.webp', 'image/webp');

const chromePath =
  process.env.PLAYWRIGHT_CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({
  executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 500 },
  deviceScaleFactor: 1,
});

for (const locale of PUBLISHED_LOCALES) {
  const pageCopy = landing(locale);
  const studio = LOCALE_COPY[locale];
  const data = heroCards[locale];
  const [quoteOpen, quoteClose] = [
    studio.feature?.qOpen ?? pageCopy.quoteMarks[0],
    studio.feature?.qClose ?? pageCopy.quoteMarks[1],
  ];
  const featureLines = (studio.feature?.hero ?? pageCopy.meta.title).split('\n');
  const quote = data.cards[0].text;
  const noticeA = data.cards[1].text;
  const noticeB = data.cards[2].text;

  await page.setContent(
    `<!doctype html>
    <html lang="${html(locale)}">
      <head>
        <meta charset="utf-8">
        <style>
          @font-face{font-family:Poppins;src:url("${fontRegular}") format("woff2");font-weight:400}
          @font-face{font-family:Poppins;src:url("${fontBold}") format("woff2");font-weight:700}
          @font-face{font-family:Playfair;src:url("${fontSerif}") format("woff2");font-weight:400}
          *{box-sizing:border-box}
          html,body{width:1024px;height:500px;margin:0;overflow:hidden}
          body{
            position:relative;
            background:
              radial-gradient(circle at 7% 95%,rgba(93,4,38,.62),transparent 31%),
              linear-gradient(118deg,#781033 0%,#a6114a 52%,#ca215e 100%);
            color:#fff;
            font-family:Poppins,sans-serif
          }
          .mark{
            position:absolute;left:55px;top:43px;width:205px;height:auto
          }
          .wing{
            position:absolute;left:-38px;bottom:-76px;width:260px;height:260px;
            opacity:.095;filter:brightness(0) invert(1);transform:rotate(-12deg)
          }
          .copy{position:absolute;left:55px;top:138px;width:520px}
          h1{
            margin:0;max-width:500px;font-size:38px;line-height:1.05;
            letter-spacing:-.02em;font-weight:700;text-wrap:balance
          }
          h1 span{display:block}
          blockquote{
            margin:26px 0 0;max-width:515px;font-family:Playfair,serif;
            font-size:30px;line-height:1.27;text-wrap:balance
          }
          .phone{
            position:absolute;left:701px;top:3px;width:313px;height:635px;
            overflow:hidden;border:7px solid #11131a;border-radius:48px;
            background:#111 url("${phoneBackground}") center/cover no-repeat;
            box-shadow:0 24px 50px rgba(31,4,14,.45);
            transform:rotate(-7deg)
          }
          .phone:after{
            content:"";position:absolute;inset:0;
            background:linear-gradient(180deg,rgba(5,9,19,.05),rgba(5,9,19,.25));
            pointer-events:none
          }
          .date{
            position:absolute;z-index:1;top:92px;left:12px;right:12px;
            text-align:center;font-size:13px;font-weight:700
          }
          .time{
            position:absolute;z-index:1;top:116px;left:0;right:0;
            text-align:center;font-size:62px;line-height:1;font-weight:700
          }
          .pill{
            position:absolute;z-index:1;top:184px;left:27px;right:27px;
            text-align:center;font-size:12px;line-height:1.25;font-weight:700
          }
          .notice{
            position:absolute;z-index:4;left:592px;width:330px;min-height:97px;
            display:flex;gap:13px;align-items:center;padding:15px 18px;
            border-radius:20px;background:rgba(255,255,255,.97);color:#21151a;
            box-shadow:0 13px 30px rgba(37,4,17,.34);
            transform:rotate(-2deg)
          }
          .notice.one{top:235px}
          .notice.two{top:370px;left:625px;transform:rotate(2.2deg)}
          .notice img{
            flex:0 0 auto;width:48px;height:48px;border-radius:10px;
            box-shadow:0 2px 5px rgba(0,0,0,.18)
          }
          .notice-copy{min-width:0;flex:1}
          .notice-top{
            display:flex;justify-content:space-between;gap:8px;align-items:baseline;
            font-size:13px;line-height:1.1
          }
          .notice-top strong{font-weight:700}
          .notice-top span{color:#7b7376;font-size:10px;white-space:nowrap}
          .notice p{
            margin:4px 0 0;font-family:Playfair,serif;font-size:19px;
            line-height:1.17;text-wrap:balance
          }
          :lang(ja) blockquote,:lang(ko) blockquote{font-family:Poppins,sans-serif;font-size:27px}
          :lang(ja) .notice p,:lang(ko) .notice p{font-family:Poppins,sans-serif;font-size:16px}
          :lang(de) blockquote,:lang(pl) blockquote,:lang(tr) blockquote{font-size:27px}
          :lang(de) .notice p,:lang(pl) .notice p,:lang(tr) .notice p{font-size:17px}
        </style>
      </head>
      <body>
        <img class="mark" src="${logo}" alt="">
        <img class="wing" src="${butterfly}" alt="">
        <main class="copy">
          <h1>${featureLines.map((line) => `<span>${html(line)}</span>`).join('')}</h1>
          <blockquote>${html(quoteOpen)}${html(quote)}${html(quoteClose)}</blockquote>
        </main>
        <div class="phone">
          <div class="date">${html(studio.reminders.date)}</div>
          <div class="time">${html(studio.reminders.time)}</div>
          <div class="pill">${html(data.pill)}</div>
        </div>
        <article class="notice one">
          <img src="${icon}" alt="">
          <div class="notice-copy">
            <div class="notice-top"><strong>Unique</strong><span>${html(data.whens[0])}</span></div>
            <p>${html(noticeA)}</p>
          </div>
        </article>
        <article class="notice two">
          <img src="${icon}" alt="">
          <div class="notice-copy">
            <div class="notice-top"><strong>Unique</strong><span>${html(data.whens[1])}</span></div>
            <p>${html(noticeB)}</p>
          </div>
        </article>
      </body>
    </html>`,
    { waitUntil: 'load' }
  );
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: path.join(REPO, 'public/og', `${locale}.png`),
    type: 'png',
  });

  const screenshotSource = path.join(
    STUDIO,
    'exports/apple-6.9',
    locale,
    '01-hook.png'
  );
  if (!fs.existsSync(screenshotSource)) {
    throw new Error(`${locale}: missing approved store screenshot ${screenshotSource}`);
  }
  const screenshotData = `data:image/png;base64,${fs
    .readFileSync(screenshotSource)
    .toString('base64')}`;
  await page.setContent(
    `<!doctype html><html><head><style>
      *{box-sizing:border-box}html,body{width:620px;height:1347px;margin:0;overflow:hidden}
      img{display:block;width:620px;height:1347px;object-fit:fill}
    </style></head><body><img src="${screenshotData}" alt=""></body></html>`,
    { waitUntil: 'load' }
  );
  await page.setViewportSize({ width: 620, height: 1347 });
  await page.screenshot({
    path: path.join(REPO, 'public/og', `screenshot-${locale}.jpg`),
    type: 'jpeg',
    quality: 86,
  });
  await page.setViewportSize({ width: 1024, height: 500 });
  console.log(
    `${locale}: public/og/${locale}.png + public/og/screenshot-${locale}.jpg`
  );
}

await browser.close();
