import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ENDONYMS,
  HREFLANG,
  LANG_BANNERS,
  LOCALES,
  OG_LOCALE,
  PLANNED_LOCALES,
  PUBLISHED_LOCALES,
  SOCIAL_IMAGE_LOCALES,
  landing,
  localeUrl,
} from '../src/i18n/index.mjs';
import { heroCards, sections } from '../src/data/localized-screens.mjs';
import { LOCALE_COPY } from '../src/data/copy/index.js';

const errors = [];
const unique = (values) => new Set(values).size === values.length;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');

const shape = (value) => {
  if (Array.isArray(value)) return ['array', value.length, ...value.map(shape)];
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value).sort().map((key) => [key, shape(value[key])])
    );
  }
  return typeof value;
};

const visitStrings = (value, callback, pathParts = []) => {
  if (typeof value === 'string') callback(value, pathParts.join('.'));
  else if (Array.isArray(value)) {
    value.forEach((item, index) => visitStrings(item, callback, [...pathParts, index]));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) =>
      visitStrings(item, callback, [...pathParts, key])
    );
  }
};

if (!unique(PLANNED_LOCALES)) errors.push('PLANNED_LOCALES contains duplicates');
if (!unique(PUBLISHED_LOCALES)) errors.push('PUBLISHED_LOCALES contains duplicates');
if (PUBLISHED_LOCALES[0] !== 'en') errors.push('English must remain the default published locale');
if (JSON.stringify(LOCALES) !== JSON.stringify(PLANNED_LOCALES)) {
  errors.push('Every planned locale must have a landing module in the planned order');
}
if (JSON.stringify(PUBLISHED_LOCALES) !== JSON.stringify(PLANNED_LOCALES)) {
  errors.push('The release-ready build must include all eleven planned locales');
}

const englishShape = JSON.stringify(shape(landing('en')));
const mustBeLocalized = [
  'sections.family.eyebrow',
  'sections.family.title',
  'sections.family.ariaLabel',
  'footer.rights',
];

const atPath = (value, dottedPath) =>
  dottedPath.split('.').reduce((current, key) => current?.[key], value);

for (const locale of PLANNED_LOCALES) {
  if (!HREFLANG[locale]) errors.push(`${locale}: missing HREFLANG`);
  if (!OG_LOCALE[locale]) errors.push(`${locale}: missing OG_LOCALE`);
  if (!ENDONYMS[locale]) errors.push(`${locale}: missing endonym`);
  if (!LOCALE_COPY[locale]) errors.push(`${locale}: missing reviewed studio copy`);
  if (!sections[locale]) errors.push(`${locale}: missing localized landing screen data`);
  if (!heroCards[locale]) errors.push(`${locale}: missing localized hero cards`);
  if (JSON.stringify(shape(landing(locale))) !== englishShape) {
    errors.push(`${locale}: landing module shape differs from en`);
  }
  visitStrings(landing(locale), (value, key) => {
    if (value.includes('—')) errors.push(`${locale}:${key}: em dash is not allowed`);
    if (value.includes('{}')) errors.push(`${locale}:${key}: unresolved placeholder`);
  });
  if (locale !== 'en') {
    for (const key of mustBeLocalized) {
      if (atPath(landing(locale), key) === atPath(landing('en'), key)) {
        errors.push(`${locale}:${key}: visible English fallback is not allowed`);
      }
    }
  }
}

for (const locale of LOCALES) {
  if (!PLANNED_LOCALES.includes(locale)) errors.push(`${locale}: module is not planned`);
  if (!landing(locale)?.meta?.title) errors.push(`${locale}: missing landing metadata`);
  if (!LANG_BANNERS[locale]?.text) errors.push(`${locale}: missing visitor-language banner`);
}

for (const locale of PUBLISHED_LOCALES) {
  if (!LOCALES.includes(locale)) errors.push(`${locale}: published without a translation module`);
  const expected = locale === 'en' ? '/unique/' : `/unique/${locale}/`;
  if (localeUrl(locale) !== expected) errors.push(`${locale}: unexpected route ${localeUrl(locale)}`);
}

for (const locale of SOCIAL_IMAGE_LOCALES) {
  if (!PLANNED_LOCALES.includes(locale)) errors.push(`${locale}: unplanned social-card locale`);
  const social = path.join(REPO, 'public', 'og', `${locale}.png`);
  const screenshot = path.join(REPO, 'public', 'og', `screenshot-${locale}.jpg`);
  if (!fs.existsSync(social)) errors.push(`${locale}: missing localized social card`);
  if (!fs.existsSync(screenshot)) errors.push(`${locale}: missing localized schema screenshot`);
}

if (errors.length) {
  console.error(errors.map((error) => `locale error: ${error}`).join('\n'));
  process.exit(1);
}

console.log(
  `locale gate valid: ${PUBLISHED_LOCALES.join(', ')} published; ` +
    `${PLANNED_LOCALES.length} planned`
);
