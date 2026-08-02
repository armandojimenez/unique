# Unique landing localization

The landing is fully authored for all eleven app locales before publication:
English, Latin American Spanish, Brazilian Portuguese, German, French,
Italian, Japanese, Korean, Indonesian, Turkish, and Polish. The site itself
remains unpublished until explicit owner approval.

`PUBLISHED_LOCALES` in `index.mjs` is the single publication gate. It drives:

- generated routes;
- canonical and hreflang links;
- Open Graph locale alternates;
- `MobileApplication` and `WebSite` schema languages;
- desktop, mobile, and footer language navigation;
- the optional first-visit language suggestion;
- sitemap routes and localized store links.

Every locale is already prepared with this workflow:

1. Keep `src/i18n/<locale>.mjs` structurally identical to `en.mjs`, including
   native visitor-banner and accessibility copy.
2. Keep screenshot headlines and in-app strings aligned with the reviewed
   Unique screenshot-studio copy in `src/data/generated`.
3. Keep a localized `public/og/<locale>.png` for every release route.
4. Run `npm run qa:locales` and `npm run qa` across every locale.
5. Publish only after the app release and explicit owner confirmation.

Never publish an English fallback route under a localized URL.
