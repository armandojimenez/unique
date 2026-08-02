// Français — informal "tu", the register French self-care apps use.
//
// Gender rule (GLOBAL_EXPANSION_PLAN §3–5): no "·", no "(e)", no doublets.
// French agreement is the hard case, so every line is built from
// second-person verbs and abstract nouns ("ta gentillesse", "ta force")
// that never agree with the reader.
export default {
  hook: { hero: 'Des compliments\nqui te voient' },
  reminders: {
    hero: 'Des mots doux\ntoute la journée',
    date: 'Lundi 1er janvier',
    time: '11:11',
    whens: ['maintenant', '11:11', '09:30'],
  },
  categories: { hero: 'Un compliment pour\nchaque part de toi' },
  widgets: {
    hero: 'Ta valeur sur\nton écran d’accueil',
    heroAndroid: 'Ta valeur sur\nton écran d’accueil',
  },
  themes: { hero: 'Chaque message\nà ton image', sample: 'Aa' },
  dark: { hero: 'Avec toi,\njour et nuit' },
  myown: {
    hero: 'Écris les mots\nque tu veux lire',
    dialogTyped: 'Ta présence donne aux autres le sentiment de compter.',
    rows: [
      { text: 'J’ai le droit de célébrer le chemin parcouru.', date: '22 juillet' },
      { text: 'Se reposer, ce n’est pas abandonner.', date: '15 juillet' },
      {
        text: 'Tu vaux tout l’amour que tu donnes.',
        author: 'Maman',
        date: '7 juillet',
      },
      { text: 'Ma douceur n’a jamais été une faiblesse.', date: '27 juin' },
      { text: 'J’aime la personne que je deviens.', date: '18 juin' },
      {
        text: 'La douceur envers toi compte aussi comme de la bonté.',
        author: 'Sam',
        date: '9 juin',
      },
      { text: 'Je n’ai pas à mériter ma propre approbation.', date: '1er juin' },
    ],
  },
  share: { hero: 'Des compliments\nqui deviennent art' },
  practice: { hero: 'Fais de l’amour-propre\nun rituel quotidien' },
  proof: {
    hero: 'Adoré par des gens\nqui en avaient besoin',
    heroAndroid: 'Adoré partout\ndans le monde',
    storeIos: 'sur l’App Store',
    storeAndroid: 'sur Google Play',
    familyTitle: 'Fait avec amour, avec la famille Believe',
    familySub: 'Plus d’un million de téléchargements sur nos apps',
  },
  feature: { hero: 'Compliments quotidiens\n& amour-propre', qOpen: '« ', qClose: ' »' },

  ui: {
    app_name: 'Unique',
    categories: 'Catégories',
    reset: 'Réinitialiser',
    themes: 'Choisis ton style',
    make_theme: 'Créer mon thème',
    settings: { my_favorites_title: 'Mes favoris' },
    my_own: {
      title: 'Mes messages',
      add: 'Ajouter',
      added: 'Ajouté : {}',
      add_dialog_title: 'Ajoute ton inspiration !',
      save: 'Enregistrer',
      author_hint: 'Auteur (facultatif)',
    },
    backup: { backup_and_restore_button: 'Sauvegarde et restauration' },
    share: {
      story: 'Story',
      square: 'Carré',
      save_image: 'Enregistrer',
      copy_text: 'Copier',
      more: 'Plus',
    },
    magic_center: { practice: { day: 'Jour', night: 'Nuit' } },
    everything: { title: 'Ce qui te rend unique' },
    favorites: { title: 'Mes favoris' },
    mine: { title: 'Mes propres messages' },
    smart: { title: 'Ton intelligence' },
    resilience: { title: 'Ta résilience' },
    beauty: { title: 'Ta beauté' },
    kindness: { title: 'Ta gentillesse' },
    in_love: { title: 'Des mots d’amour' },
    amazing: { title: 'Ce que tu as d’incroyable' },
    gratitude: { title: 'Ta gratitude' },
    creativity: { title: 'Ta créativité' },
    soul: { title: 'Ton âme éternelle' },
    confidence: { title: 'Phrases de confiance' },
    future_self: { title: 'Message du futur' },
    healthy: { title: 'Ton corps en forme' },
    self_love: { title: 'Phrases d’amour-propre' },
    optimism: { title: 'Ton optimisme' },
    smile: { title: 'Ton sourire' },
    angels: { title: 'De tes anges' },
    self_care: { title: 'Phrases de bien-être' },
  },

  messages: {
    'amazing.9': 'Tu as une façon bien à toi de regarder le monde.',
    'creativity.4': 'Ton esprit créatif est une bouffée d’air frais.',
    'resilience.6': 'Ta façon de te relever après un échec est incroyable.',
    'kindness.14': 'Ta gentillesse est un cadeau qui ne s’épuise jamais.',
    'optimism.5':
      'Ton optimisme est contagieux et relève tout le monde autour de toi.',
    'optimism.11': 'Ton esprit optimiste est un cadeau que tu fais au monde.',
    'confidence.168': 'Ton énergie te présente avant même que tu parles.',
    'soul.7': 'Ton âme danse de joie et sème du bonheur partout où tu passes.',
  },
};
