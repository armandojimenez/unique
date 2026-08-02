# Unique landing (UX8) — owner-approved release candidate

Astro static site for the planned canonical URL
`https://armandojimenez.dev/unique/`, built from the proven Motiv landing
architecture and the reusable Believe landing playbook. Unique's approved
2026-07-26 screenshot studio is the visual source of truth.

## Product and design contract

- Layout rhythm mirrors Motiv: sticky navigation, hero, proof, alternating
  product scenes, compliment interludes, app family, FAQ, closing CTA.
- The hero follows Motiv's composition with Unique's approved reminders lock
  screen first, and the header/footer use Unique's real wordmark assets.
- The primary compliment card keeps its action menu inset from the card edge;
  the category grid cycles the selected state only while visible; the closing
  CTA uses Unique's real SVG mark.
- Every product visual is rebuilt from Unique's real app assets and screenshot
  studio geometry. No Believe or Motiv product art is used.
- Unique's palette is raspberry, blush, mint, powder blue, teal, and night
  plum. Poppins carries UI copy; Playfair Display carries compliments.
- The signature motion is the living compliment stack with a quiet butterfly
  orbit. Supporting interactions pause offscreen and honor reduced motion.
- The app is already live. Both store badges are real links.

## Locale gate

All eleven landing translations are complete now. `PUBLISHED_LOCALES` contains
`en`, `es`, `pt`, `de`, `fr`, `it`, `ja`, `ko`, `id`, `tr`, and `pl`, so the
local production artifact is ready to ship with the localized app release
without a post-launch translation pass. The owner approved the rendered
landing on 2026-07-27. The website remains unpublished until the coordinated
localized app release.

One gate controls routes, canonical and hreflang links, schema languages,
sitemap entries, localized store links, language navigation, and the
visitor-language suggestion. Every route has native landing copy, approved
localized in-app screen copy, and its own Open Graph/Twitter card and schema
screenshot. English fallback content is forbidden on localized URLs.

## URL migration

1. Publish the new public repo as `armandojimenez/unique` with the approved
   localized app release.
2. Verify `https://armandojimenez.dev/unique/`, legal links, stores, sitemap,
   structured data, and performance.
3. Only then convert the legacy `armandojimenez/unique-app` repo to a permanent
   redirect stub pointing to `/unique/`. The old path must remain forever
   because shipped binaries and store metadata reference it.
4. Updating app/store URLs is a separate approval-gated task.

The Unique Flutter source is already prepared for that migration without
shipping it early: English shares `/unique/`, the ten planned locales share
`/unique/<locale>/`, and unknown locale codes fall back to English. This is
covered by `test/global_expansion/landing_link_localization_test.dart`.

## Current state

- [x] UX7 screenshot studio owner-approved
- [x] Legacy hosting and shipped URL audit
- [x] Local Astro scaffold
- [x] Eleven complete landing and SEO translation modules
- [x] Eleven localized social cards and schema screenshots
- [x] Final all-locale responsive QA: 44 route/viewport combinations at
      320, 390, 768, and 1440 px
- [x] Independent copy, visual, and SEO reviewer passes
- [x] Lighthouse: mobile 97/100 performance and 100/100 accessibility,
      best practices, and SEO; desktop 100/100 across all four categories
- [x] Dependency audit: zero vulnerabilities
- [x] Root-domain robots and sitemap entries prepared locally in
      `~/development/web/armandojimenez.github.io`
- [x] Owner approval — 2026-07-27
- [ ] Publish new site
- [ ] Publish root-domain robots and sitemap entries in the same release
- [ ] Publish legacy redirect

Nothing in this directory has been published. Owner approval covers the
release candidate; it does not authorize publishing ahead of the localized app
release.
