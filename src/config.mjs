// Store, legal, and social endpoints in one place.

export const BASE = '/unique';
export const asset = (path) => `${BASE}${path}`;
export const SITE_ORIGIN = 'https://armandojimenez.dev';
export const LANDING_URL = `${SITE_ORIGIN}${BASE}/`;

export const SITE_NAME = 'Unique';
export const APP_NAME = 'Unique - Daily Compliments';
export const PUBLISHER_NAME = 'Believe Apps';
export const CREATOR_NAME = 'Armando Jiménez';

// Verified live 2026-07-26. Both stores display 4.8. The schema deliberately
// omits aggregateRating until a current Google rating count is captured.
export const RATING = { ios: '4.8', android: '4.8' };

export const APP_STORE_ID = '6449202206';
export const APP_STORE_URL =
  'https://apps.apple.com/app/unique-daily-compliments/id6449202206';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=dev.armandojimenez.unique';

const PLAY_HL = {
  en: 'en',
  es: 'es_419',
  pt: 'pt_BR',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  id: 'id',
  tr: 'tr',
  pl: 'pl',
};

const APPLE_L = {
  es: 'es-MX',
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

export const storeUrls = (locale) => ({
  ios: APPLE_L[locale] ? `${APP_STORE_URL}?l=${APPLE_L[locale]}` : APP_STORE_URL,
  android: `${PLAY_STORE_URL}&hl=${PLAY_HL[locale] ?? 'en'}`,
});

// Unique has historically shared the Believe family social accounts.
export const INSTAGRAM_URL = 'https://www.instagram.com/believe.apps/';
export const FACEBOOK_URL = 'https://www.facebook.com/believe.apps';

const LEGAL = {
  en: {
    privacy: 'https://armandojimenez.dev/apps/unique/privacy-policy.html',
    terms: 'https://armandojimenez.dev/apps/unique/terms.html',
  },
  es: {
    privacy: 'https://armandojimenez.dev/apps/unique/privacy-policy-es.html',
    terms: 'https://armandojimenez.dev/apps/unique/terms-es.html',
  },
};

// UX6A owner-approved English fallback for locales without a translated
// policy page. Spanish uses the reviewed Spanish pages.
export const legalUrls = (locale) => LEGAL[locale] ?? LEGAL.en;
export const HELP_EMAIL = 'helpunique@believeaffirmations.com';
