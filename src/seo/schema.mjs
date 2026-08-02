// JSON-LD builders. Pages assemble their graph from these and hand it to
// Base via the `schemas` prop. Every claim here must match what the page
// visibly shows. FAQPage mirrors the rendered FAQ. aggregateRating stays
// omitted until a current store rating count is captured with the score.
import {
  APP_NAME,
  SITE_NAME,
  SITE_ORIGIN,
  LANDING_URL,
  PUBLISHER_NAME,
  CREATOR_NAME,
  APP_STORE_URL,
  PLAY_STORE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '../config.mjs';
import { HREFLANG, PUBLISHED_LOCALES } from '../i18n/index.mjs';

export const ORG_ID = `${LANDING_URL}#organization`;
export const PERSON_ID = `${SITE_ORIGIN}/#armando-jimenez`;
export const APP_ID = `${LANDING_URL}#app`;
export const WEBSITE_ID = `${LANDING_URL}#website`;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: PUBLISHER_NAME,
  url: `${SITE_ORIGIN}/`,
  founder: { '@type': 'Person', '@id': PERSON_ID, name: CREATOR_NAME },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
});

export const mobileApp = ({ description, url, image, screenshot }) => ({
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': APP_ID,
  name: APP_NAME,
  description,
  url,
  image,
  operatingSystem: 'iOS, iPadOS, Android',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Health & Fitness',
  installUrl: [APP_STORE_URL, PLAY_STORE_URL],
  downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
  // A real store screenshot (studio export), not the Open Graph banner.
  screenshot: screenshot ?? `${LANDING_URL}og/screenshot-en.jpg`,
  sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  offers: [
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: APP_STORE_URL,
    },
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: PLAY_STORE_URL,
    },
  ],
  // The app's true language list: only locales the shipped app supports.
  inLanguage: PUBLISHED_LOCALES.map((l) => HREFLANG[l]),
  author: { '@type': 'Person', '@id': PERSON_ID, name: CREATOR_NAME },
  publisher: { '@type': 'Person', '@id': PERSON_ID, name: CREATOR_NAME },
  provider: { '@id': ORG_ID },
  brand: { '@type': 'Brand', name: SITE_NAME },
});

export const webSite = ({ url }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url,
  inLanguage: PUBLISHED_LOCALES.map((l) => HREFLANG[l]),
  creator: { '@type': 'Person', '@id': PERSON_ID, name: CREATOR_NAME },
  publisher: { '@id': ORG_ID },
});

export const faqPage = (items, { url = LANDING_URL, language = 'en' } = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  url: `${url}#faq`,
  isPartOf: { '@id': WEBSITE_ID },
  inLanguage: language,
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
