// English screenshot copy — the source of truth every other locale
// translates from. Benefit-first, one benefit per slide, sentence case, no em
// dashes, two lines max (hand-broken with \n). The deck speaks the way Unique
// speaks: warm, specific, a friend who notices things about you.
//
// `ui` overlays app translations (category titles, page titles) for locales
// the app doesn't ship yet; en needs none.
// `messages` overlays compliment bodies by stable id; en needs none — every
// showcased id resolves straight out of assets/messages/en/.
export default {
  hook: { hero: 'Compliments that\nmake you feel seen' },
  reminders: {
    hero: 'Kind words arrive\nall day long',
    // Lock-screen date + clock. 11:11 is Unique's own hour: it is the app's
    // default self-love reminder time and what the live gallery shows.
    // Locales adapt format (24h clocks show 11:11 / 23:11).
    date: 'Monday, January 1',
    time: '11:11',
    whens: ['now', '11:11 AM', '9:30 AM'],
  },
  categories: { hero: 'A compliment for\nevery part of you' },
  widgets: {
    hero: 'Your worth, right on\nyour Home Screen',
    heroAndroid: 'Your worth, right on\nyour home screen',
  },
  themes: {
    hero: 'Make every message\nlook like you',
    // Specimen glyph on the theme cards; CJK locales show a native letter
    sample: 'Aa',
  },
  dark: { hero: 'With you,\nday and night' },
  myown: {
    hero: 'Write the words\nyou need to hear',
    // The add dialog, mid-thought — a real person writing a line for
    // themselves. Kept gender-universal in every locale. The dialog's own
    // chrome (title, hint, Save) comes from the app's `my_own.*` strings,
    // not from here.
    dialogTyped: 'Your presence makes people feel valued.',
    // The private collection: words written on ordinary days, dated back
    // over months. Gender-neutral in every locale.
    rows: [
      { text: 'I am allowed to be proud of how far I have come.', date: 'July 22' },
      { text: 'Resting is not quitting.', date: 'July 15' },
      {
        text: 'You are worth every bit of the love you give away.',
        author: 'Mom',
        date: 'July 7',
      },
      { text: 'My softness has never once made me weak.', date: 'June 27' },
      { text: 'I like the person I am becoming.', date: 'June 18' },
      {
        text: 'Being kind to yourself counts as being kind.',
        author: 'Sam',
        date: 'June 9',
      },
      { text: 'I do not need to earn my own approval.', date: 'June 1' },
    ],
  },
  share: { hero: 'Turn compliments\ninto art you share' },
  practice: { hero: 'Make self-love\na daily practice' },
  proof: {
    // The score itself is drawn big by the slide, so the hero never repeats
    // it — that also keeps comma-decimal locales out of the headline.
    hero: 'Loved by people\nwho needed this',
    heroAndroid: 'Loved by people\naround the world',
    storeIos: 'on the App Store',
    storeAndroid: 'on Google Play',
    familyTitle: 'Made with love, with the Believe family',
    familySub: 'Over 1 million downloads across our apps',
  },
  // qOpen/qClose: the feature graphic's quotation marks — each locale
  // overrides with its native convention („…“, «…», 「…」…).
  feature: {
    hero: 'Daily compliments\n& self-love',
    qOpen: '“',
    qClose: '”',
  },
};
