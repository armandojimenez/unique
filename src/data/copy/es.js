// Español (es-419) — Latin American Spanish, the app's second shipped
// locale. Voice: warm, direct, tuteo (never "vos", never "usted").
//
// Gender rule (GLOBAL_EXPANSION_PLAN §3–5): one natural, gender-universal
// target. No "o/a", no "@", no "x", no schwa, no doublets. Where English
// leans on a past participle that Spanish would gender ("feel seen",
// "loved"), the sentence is rebuilt around a verb or a noun instead.
export default {
  hook: { hero: 'Palabras que\nde verdad te ven' },
  reminders: {
    hero: 'Palabras lindas\ntodo el día',
    date: 'Lunes, 1 de enero',
    time: '11:11',
    whens: ['ahora', '11:11 a.m.', '9:30 a.m.'],
  },
  categories: { hero: 'Un cumplido para\ncada parte de ti' },
  widgets: {
    hero: 'Tu valor en la\npantalla de inicio',
    heroAndroid: 'Tu valor en la\npantalla de inicio',
  },
  themes: { hero: 'Haz que cada mensaje\nse vea como tú', sample: 'Aa' },
  dark: { hero: 'Contigo,\nde día y de noche' },
  myown: {
    hero: 'Escribe las palabras\nque necesitas leer',
    dialogTyped: 'Tu presencia hace que la gente se sienta valorada.',
    rows: [
      { text: 'Tengo derecho a celebrar lo lejos que he llegado.', date: '22 de julio' },
      { text: 'Descansar no es rendirse.', date: '15 de julio' },
      {
        text: 'Vales todo el amor que regalas.',
        author: 'Mamá',
        date: '7 de julio',
      },
      { text: 'Mi ternura nunca me ha hecho débil.', date: '27 de junio' },
      { text: 'Me gusta la persona en la que me estoy convirtiendo.', date: '18 de junio' },
      {
        text: 'Ser amable contigo también cuenta como ser amable.',
        author: 'Sam',
        date: '9 de junio',
      },
      { text: 'No necesito ganarme mi propia aprobación.', date: '1 de junio' },
    ],
  },
  share: { hero: 'Convierte cumplidos\nen arte para compartir' },
  practice: { hero: 'Haz del amor propio\nun hábito diario' },
  proof: {
    hero: 'Lo aman quienes\nmás lo necesitaban',
    heroAndroid: 'Lo aman personas\nen todo el mundo',
    storeIos: 'en la App Store',
    storeAndroid: 'en Google Play',
    familyTitle: 'Hecho con amor, con la familia Believe',
    familySub: 'Más de 1 millón de descargas entre nuestras apps',
  },
  feature: { hero: 'Cumplidos diarios\ny amor propio', qOpen: '«', qClose: '»' },

  // App-UI overlay: the strings the app itself will ship in UX5. Until then
  // the studio carries reviewed targets so the screens are never English.
  ui: {
    app_name: 'Unique',
    categories: 'Categorías',
    reset: 'Restablecer',
    themes: 'Elige tu arte',
    make_theme: 'Crear tema propio',
    settings: { my_favorites_title: 'Mis favoritos' },
    my_own: {
      title: 'Mis mensajes',
      add: 'Añadir',
      added: 'Añadido: {}',
      add_dialog_title: '¡Añade tu inspiración!',
      save: 'Guardar',
      author_hint: 'Autor (opcional)',
    },
    backup: { backup_and_restore_button: 'Copia y restauración' },
    share: {
      story: 'Historia',
      square: 'Cuadrado',
      save_image: 'Guardar',
      copy_text: 'Copiar',
      more: 'Más',
    },
    magic_center: { practice: { day: 'Día', night: 'Noche' } },
    everything: { title: 'Tu singularidad' },
    favorites: { title: 'Mis favoritos' },
    mine: { title: 'Mis propios mensajes' },
    smart: { title: 'Tu inteligencia' },
    resilience: { title: 'Tu resiliencia' },
    beauty: { title: 'Tu belleza' },
    kindness: { title: 'Tu bondad' },
    in_love: { title: 'Amor para ti' },
    amazing: { title: 'Lo increíble de ti' },
    gratitude: { title: 'Tu gratitud' },
    creativity: { title: 'Tu creatividad' },
    soul: { title: 'Tu alma eterna' },
    confidence: { title: 'Frases de confianza' },
    future_self: { title: 'Mensaje del futuro' },
    healthy: { title: 'Tu cuerpo sano' },
    self_love: { title: 'Frases de amor propio' },
    optimism: { title: 'Tu optimismo' },
    smile: { title: 'Tu sonrisa' },
    angels: { title: 'De tus ángeles' },
    self_care: { title: 'Frases de autocuidado' },
  },

  // Interim compliment targets, keyed by UX3 stable id. The app's own
  // es-419 corpus wins per id the moment UX4 ships it.
  messages: {
    'amazing.9': 'Tienes una forma única y especial de ver el mundo.',
    'creativity.4': 'Tu espíritu creativo es una bocanada de aire fresco.',
    'resilience.6': 'Tu manera de levantarte después de un tropiezo es increíble.',
    'kindness.14': 'Tu bondad es un regalo que nunca deja de dar.',
    'optimism.5': 'Tu mirada optimista se contagia y levanta a quienes te rodean.',
    'optimism.11': 'Tu espíritu optimista es un regalo que le das al mundo.',
    'confidence.168': 'Tu energía te presenta antes de que digas una palabra.',
    'soul.7': 'Tu alma baila de alegría y reparte felicidad por donde pasas.',
  },
};
