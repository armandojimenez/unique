// Polski — informal "ty", the register Polish self-care apps use.
//
// Gender rule (GLOBAL_EXPANSION_PLAN §3–5): no "-a", no "(a)", no doublets.
// Polish genders past-tense verbs and adjectives, so every line is built
// from present-tense verbs, nouns and impersonal forms that stay neutral
// ("Twoja dobroć", "Odpoczynek to nie rezygnacja").
// Polish runs long — heroes stay short so the auto-fit never has to shrink.
export default {
  hook: { hero: 'Komplementy,\nktóre cię widzą' },
  reminders: {
    hero: 'Miłe słowa\nprzez cały dzień',
    date: 'Poniedziałek, 1 stycznia',
    time: '11:11',
    whens: ['teraz', '11:11', '09:30'],
  },
  categories: { hero: 'Komplement na\nkażdą część ciebie' },
  widgets: {
    hero: 'Twoja wartość\nna ekranie głównym',
    heroAndroid: 'Twoja wartość\nna ekranie głównym',
  },
  themes: { hero: 'Każda wiadomość\nw twoim stylu', sample: 'Aa' },
  dark: { hero: 'Z tobą,\ndniem i nocą' },
  myown: {
    hero: 'Napisz słowa,\nktórych potrzebujesz',
    dialogTyped: 'Przy tobie inni czują, że naprawdę się liczą.',
    rows: [
      { text: 'Mam prawo świętować całą przebytą drogę.', date: '22 lipca' },
      { text: 'Odpoczynek to nie rezygnacja.', date: '15 lipca' },
      {
        text: 'Zasługujesz na całą miłość, którą rozdajesz.',
        author: 'Mama',
        date: '7 lipca',
      },
      { text: 'Moja łagodność nigdy nie była słabością.', date: '27 czerwca' },
      { text: 'Lubię osobę, którą się staję.', date: '18 czerwca' },
      {
        text: 'Dobroć wobec siebie też liczy się jako dobroć.',
        author: 'Sam',
        date: '9 czerwca',
      },
      { text: 'Nie muszę zasługiwać na własną akceptację.', date: '1 czerwca' },
    ],
  },
  share: { hero: 'Zamień komplementy\nw grafiki do udostępnienia' },
  practice: { hero: 'Zrób z miłości do siebie\ncodzienną praktykę' },
  proof: {
    hero: 'Pokochały to osoby,\nktóre tego potrzebowały',
    heroAndroid: 'Kochają to ludzie\nna całym świecie',
    storeIos: 'w App Store',
    storeAndroid: 'w Google Play',
    familyTitle: 'Zrobione z miłością, z rodziną Believe',
    familySub: 'Ponad milion pobrań naszych aplikacji',
  },
  feature: { hero: 'Codzienne komplementy\ni miłość do siebie', qOpen: '„', qClose: '”' },

  ui: {
    app_name: 'Unique',
    categories: 'Kategorie',
    reset: 'Resetuj',
    themes: 'Wybierz swój styl',
    make_theme: 'Stwórz własny motyw',
    settings: { my_favorites_title: 'Moje ulubione' },
    my_own: {
      title: 'Moje wiadomości',
      add: 'Dodaj',
      added: 'Dodano: {}',
      add_dialog_title: 'Dodaj swoją inspirację!',
      save: 'Zapisz',
      author_hint: 'Autor (opcjonalnie)',
    },
    backup: { backup_and_restore_button: 'Kopia i przywracanie' },
    share: {
      story: 'Relacja',
      square: 'Kwadrat',
      save_image: 'Zapisz',
      copy_text: 'Kopiuj',
      more: 'Więcej',
    },
    magic_center: { practice: { day: 'Dzień', night: 'Noc' } },
    everything: { title: 'Twoja wyjątkowość' },
    favorites: { title: 'Moje ulubione' },
    mine: { title: 'Moje własne wiadomości' },
    smart: { title: 'Twoja inteligencja' },
    resilience: { title: 'Twoja odporność' },
    beauty: { title: 'Twoje piękno' },
    kindness: { title: 'Twoja dobroć' },
    in_love: { title: 'Słowa miłości' },
    amazing: { title: 'To, co masz niezwykłego' },
    gratitude: { title: 'Twoja wdzięczność' },
    creativity: { title: 'Twoja kreatywność' },
    soul: { title: 'Twoja wieczna dusza' },
    confidence: { title: 'Cytaty o pewności siebie' },
    future_self: { title: 'Wiadomość z przyszłości' },
    healthy: { title: 'Twoje zdrowe ciało' },
    self_love: { title: 'Cytaty o miłości do siebie' },
    optimism: { title: 'Twój optymizm' },
    smile: { title: 'Twój uśmiech' },
    angels: { title: 'Od twoich aniołów' },
    self_care: { title: 'Cytaty o trosce o siebie' },
  },

  messages: {
    'amazing.9': 'Masz swój własny, wyjątkowy sposób patrzenia na świat.',
    'creativity.4': 'Twój twórczy duch to powiew świeżego powietrza.',
    'resilience.6': 'To, jak podnosisz się po upadku, jest niesamowite.',
    'kindness.14': 'Twoja dobroć to dar, który nigdy się nie kończy.',
    'optimism.5': 'Twój optymizm zaraża i podnosi na duchu ludzi wokół ciebie.',
    'optimism.11': 'Twój optymistyczny duch to dar, który dajesz światu.',
    'confidence.168': 'Twoja energia przedstawia cię, zanim powiesz słowo.',
    'soul.7': 'Twoja dusza tańczy z radości i rozsiewa szczęście wszędzie, gdzie idziesz.',
  },
};
