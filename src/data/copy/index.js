// One copy module per locale, all sharing the same nested shape (en.js is
// the reference). Adding a language = adding one file here + one import.
import en from './en.js';
import es from './es.js';
import pt from './pt.js';
import de from './de.js';
import fr from './fr.js';
import it from './it.js';
import ja from './ja.js';
import ko from './ko.js';
import id from './id.js';
import tr from './tr.js';
import pl from './pl.js';

// Order = export order. The tool keeps short store codes; `es` carries
// es-419 content and `pt` carries pt-BR content, per the locale family in
// unique_app/docs/GLOBAL_EXPANSION_PLAN.md §2. See LOCALE_SPEC.md for the
// upload mapping.
export const LOCALE_COPY = { en, es, pt, de, fr, it, ja, ko, id, tr, pl };

const dig = (obj, path) =>
  path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

/// Builds the multi-locale text spec resolveText() already understands:
/// t('hook.hero') → { en: '…', es: '…', pt: '…', … }
export const t = (path) => {
  const out = {};
  for (const [locale, copy] of Object.entries(LOCALE_COPY)) {
    const v = dig(copy, path);
    if (typeof v === 'string') out[locale] = v;
  }
  if (out.en == null) throw new Error(`copy path missing in en: ${path}`);
  return out;
};

/// The studio-side app-UI overlay for a locale (category titles, page
/// titles… — strings the app itself doesn't ship yet for new locales).
export const uiOverlay = (locale) => LOCALE_COPY[locale]?.ui ?? null;

/// Interim compliment-body translations keyed by UX3 stable id
/// ('kindness.14'), for a locale whose UX4 corpus hasn't shipped yet. The
/// app's own corpus wins per id once it exists. Values: string (body) or
/// { body, author }.
export const messageOverlay = (locale) => LOCALE_COPY[locale]?.messages ?? null;
