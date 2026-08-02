// Deutsch — informal "du" throughout, which is the register self-care apps
// use in German and the only one that keeps the app's friend voice.
//
// Gender rule (GLOBAL_EXPANSION_PLAN §3–5): no Binnen-I, no *, no :, no _,
// no doublets. German makes this easy: second person and abstract nouns
// ("deine Freundlichkeit", "deine Stärke") carry no gender at all.
// German runs long — every hero is deliberately short so the auto-fit
// never has to shrink it below the design size.
export default {
  hook: { hero: 'Komplimente,\ndie dich sehen' },
  reminders: {
    hero: 'Liebe Worte,\nden ganzen Tag',
    date: 'Montag, 1. Januar',
    time: '11:11',
    whens: ['jetzt', '11:11', '09:30'],
  },
  categories: { hero: 'Ein Kompliment für\njeden Teil von dir' },
  widgets: {
    hero: 'Dein Wert auf dem\nHome-Bildschirm',
    heroAndroid: 'Dein Wert auf dem\nStartbildschirm',
  },
  themes: { hero: 'Jede Nachricht\nso wie du', sample: 'Aa' },
  dark: { hero: 'An deiner Seite,\nTag und Nacht' },
  myown: {
    hero: 'Schreib die Worte,\ndie du brauchst',
    dialogTyped: 'Deine Nähe gibt Menschen das Gefühl, wertvoll zu sein.',
    rows: [
      { text: 'Ich darf feiern, wie weit ich schon gekommen bin.', date: '22. Juli' },
      { text: 'Pause machen ist kein Aufgeben.', date: '15. Juli' },
      {
        text: 'Du bist all die Liebe wert, die du verschenkst.',
        author: 'Mama',
        date: '7. Juli',
      },
      { text: 'Meine Sanftheit hat mich nie schwach gemacht.', date: '27. Juni' },
      { text: 'Ich mag den Menschen, der ich gerade werde.', date: '18. Juni' },
      {
        text: 'Freundlich zu dir selbst zu sein zählt auch.',
        author: 'Sam',
        date: '9. Juni',
      },
      { text: 'Ich muss mir meine eigene Anerkennung nicht verdienen.', date: '1. Juni' },
    ],
  },
  share: { hero: 'Komplimente werden\nKunst zum Teilen' },
  practice: { hero: 'Selbstliebe als\ntägliche Praxis' },
  proof: {
    hero: 'Geliebt von denen,\ndie es brauchten',
    heroAndroid: 'Geliebt von Menschen\nauf der ganzen Welt',
    storeIos: 'im App Store',
    storeAndroid: 'bei Google Play',
    familyTitle: 'Mit Liebe gemacht, mit der Believe-Familie',
    familySub: 'Über 1 Million Downloads unserer Apps',
  },
  feature: { hero: 'Tägliche Komplimente\n& Selbstliebe', qOpen: '„', qClose: '“' },

  ui: {
    app_name: 'Unique',
    categories: 'Kategorien',
    reset: 'Zurücksetzen',
    themes: 'Wähle deine Kunst',
    make_theme: 'Eigenes Design erstellen',
    settings: { my_favorites_title: 'Meine Favoriten' },
    my_own: {
      title: 'Meine Nachrichten',
      add: 'Neu',
      added: 'Hinzugefügt: {}',
      add_dialog_title: 'Füge deine Inspiration hinzu!',
      save: 'Speichern',
      author_hint: 'Autor (optional)',
    },
    backup: { backup_and_restore_button: 'Sichern & wiederherstellen' },
    share: {
      story: 'Story',
      square: 'Quadrat',
      save_image: 'Sichern',
      copy_text: 'Kopieren',
      more: 'Mehr',
    },
    magic_center: { practice: { day: 'Tag', night: 'Nacht' } },
    everything: { title: 'Deine Einzigartigkeit' },
    favorites: { title: 'Meine Favoriten' },
    mine: { title: 'Meine eigenen Nachrichten' },
    smart: { title: 'Deine Klugheit' },
    resilience: { title: 'Deine Widerstandskraft' },
    beauty: { title: 'Deine Schönheit' },
    kindness: { title: 'Deine Freundlichkeit' },
    in_love: { title: 'Verliebt in dich' },
    amazing: { title: 'Das Besondere an dir' },
    gratitude: { title: 'Deine Dankbarkeit' },
    creativity: { title: 'Deine Kreativität' },
    soul: { title: 'Deine ewige Seele' },
    confidence: { title: 'Sprüche über Selbstvertrauen' },
    future_self: { title: 'Nachricht aus der Zukunft' },
    healthy: { title: 'Dein gesunder Körper' },
    self_love: { title: 'Sprüche über Selbstliebe' },
    optimism: { title: 'Dein Optimismus' },
    smile: { title: 'Dein Lächeln' },
    angels: { title: 'Von deinen Engeln' },
    self_care: { title: 'Sprüche über Selbstfürsorge' },
  },

  messages: {
    'amazing.9': 'Du hast einen ganz eigenen Blick auf die Welt.',
    'creativity.4': 'Dein kreativer Geist ist wie ein frischer Wind.',
    'resilience.6': 'Wie du nach Rückschlägen wieder aufstehst, ist unglaublich.',
    'kindness.14': 'Deine Freundlichkeit ist ein Geschenk, das immer weitergibt.',
    'optimism.5': 'Dein Optimismus steckt an und richtet andere wieder auf.',
    'optimism.11': 'Dein optimistischer Geist ist ein Geschenk an die Welt.',
    'confidence.168': 'Deine Energie stellt dich vor, bevor du ein Wort sagst.',
    'soul.7': 'Deine Seele tanzt vor Freude und verteilt Glück, wo du auch bist.',
  },
};
