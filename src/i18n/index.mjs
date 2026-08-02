import { BASE } from '../config.mjs';
import en from './en.mjs';
import es from './es.mjs';
import pt from './pt.mjs';
import de from './de.mjs';
import fr from './fr.mjs';
import it from './it.mjs';
import ja from './ja.mjs';
import ko from './ko.mjs';
import id from './id.mjs';
import tr from './tr.mjs';
import pl from './pl.mjs';

const LANDING = { en, es, pt, de, fr, it, ja, ko, id, tr, pl };

// Locale order is stable across route generation, language menus, hreflang,
// social cards and sitemap output.
export const PLANNED_LOCALES = [
  'en',
  'es',
  'pt',
  'de',
  'fr',
  'it',
  'ja',
  'ko',
  'id',
  'tr',
  'pl',
];
export const LOCALES = Object.keys(LANDING);
// The site remains unpublished until owner approval. This production build is
// ready to ship every app locale together, without a post-launch copy pass.
export const PUBLISHED_LOCALES = [...PLANNED_LOCALES];

// Social cards can trail route publication without creating a broken image.
// Add a locale here only after public/og/<locale>.png exists.
export const SOCIAL_IMAGE_LOCALES = [...PLANNED_LOCALES];
export const socialImageLocale = (locale) =>
  SOCIAL_IMAGE_LOCALES.includes(locale) ? locale : 'en';

// Visitor-language suggestions are authored in the visitor's language.
export const LANG_BANNERS = Object.fromEntries(
  Object.entries(LANDING).map(([locale, strings]) => [locale, strings.langBanner])
);

export const HREFLANG = {
  en: 'en',
  es: 'es-419',
  pt: 'pt-BR',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  id: 'id',
  tr: 'tr',
  pl: 'pl',
};

export const OG_LOCALE = {
  en: 'en_US',
  es: 'es_LA',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  ja: 'ja_JP',
  ko: 'ko_KR',
  id: 'id_ID',
  tr: 'tr_TR',
  pl: 'pl_PL',
};

export const ENDONYMS = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  id: 'Bahasa Indonesia',
  tr: 'Türkçe',
  pl: 'Polski',
};

export const deck = (locale) => LANDING[locale]?.deck ?? LANDING.en.deck;
export const landing = (locale) => LANDING[locale] ?? LANDING.en;
export const localeUrl = (locale, path = '') =>
  locale === 'en' ? `${BASE}/${path}` : `${BASE}/${locale}/${path}`;
