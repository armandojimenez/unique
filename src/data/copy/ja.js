// 日本語 — polite-but-warm ですます, the register Japanese self-care apps use.
// Plain form would read curt; keigo would read corporate.
//
// Japanese has no grammatical gender and drops the second-person pronoun
// almost everywhere, so §3–5 of the expansion plan is satisfied by writing
// natural Japanese: "あなた" is used sparingly, only where the compliment
// would otherwise lose its addressee.
//
// Line length is the real constraint: CJK glyphs are full-width, so every
// hero line is held to roughly 10–12 characters and the theme specimen
// shows kana instead of "Aa".
export default {
  hook: { hero: 'あなたを見ている\n言葉たち' },
  reminders: {
    hero: 'やさしい言葉が\n一日じゅう',
    date: '1月1日 月曜日',
    time: '11:11',
    whens: ['今', '11:11', '9:30'],
  },
  categories: { hero: 'あなたのすべてに\nほめ言葉を' },
  widgets: {
    hero: 'ホーム画面に\nあなたの価値を',
    heroAndroid: 'ホーム画面に\nあなたの価値を',
  },
  themes: { hero: 'どの言葉も\nあなたらしく', sample: 'あア' },
  dark: { hero: '昼も夜も\nあなたのそばに' },
  myown: {
    hero: '自分に必要な言葉を\n自分の手で',
    dialogTyped: 'そばにいると、みんな自分が大切にされていると感じます。',
    rows: [
      { text: 'ここまで来た自分を、ちゃんと祝っていい。', date: '7月22日' },
      { text: '休むことは、あきらめることじゃない。', date: '7月15日' },
      {
        text: '人に与えているのと同じだけの愛を、あなたも受け取る価値がある。',
        author: 'お母さん',
        date: '7月7日',
      },
      { text: 'やさしさが弱さだったことは一度もない。', date: '6月27日' },
      { text: 'なりつつある自分が、けっこう好き。', date: '6月18日' },
      {
        text: '自分にやさしくすることも、りっぱなやさしさ。',
        author: 'サム',
        date: '6月9日',
      },
      { text: '自分の許可を、わざわざ勝ち取る必要はない。', date: '6月1日' },
    ],
  },
  share: { hero: 'ほめ言葉を\nシェアできる作品に' },
  practice: { hero: '自分を大切にする\n毎日の習慣に' },
  proof: {
    hero: '必要としていた人に\n愛されています',
    heroAndroid: '世界中の人に\n愛されています',
    storeIos: 'App Store で',
    storeAndroid: 'Google Play で',
    familyTitle: 'Believe ファミリーが、愛をこめて',
    familySub: '全アプリ合計で 100 万ダウンロード以上',
  },
  feature: { hero: '毎日のほめ言葉と\n自分を大切にする時間', qOpen: '「', qClose: '」' },

  ui: {
    app_name: 'Unique',
    categories: 'カテゴリー',
    reset: 'リセット',
    themes: 'デザインを選ぶ',
    make_theme: 'オリジナルのテーマを作る',
    settings: { my_favorites_title: 'お気に入り' },
    my_own: {
      title: 'マイメッセージ',
      add: '追加',
      added: '追加日: {}',
      add_dialog_title: 'あなたの言葉を追加！',
      save: '保存',
      author_hint: '作者（任意）',
    },
    backup: { backup_and_restore_button: 'バックアップと復元' },
    share: {
      story: 'ストーリー',
      square: '正方形',
      save_image: '保存',
      copy_text: 'コピー',
      more: 'その他',
    },
    magic_center: { practice: { day: '昼', night: '夜' } },
    everything: { title: 'あなたらしさ' },
    favorites: { title: 'お気に入り' },
    mine: { title: 'マイメッセージ' },
    smart: { title: 'あなたの知性' },
    resilience: { title: 'あなたの強さ' },
    beauty: { title: 'あなたの美しさ' },
    kindness: { title: 'あなたのやさしさ' },
    in_love: { title: '愛の言葉' },
    amazing: { title: 'あなたのすごいところ' },
    gratitude: { title: 'あなたの感謝' },
    creativity: { title: 'あなたの創造性' },
    soul: { title: 'あなたの永遠の魂' },
    confidence: { title: '自信の言葉' },
    future_self: { title: '未来からのメッセージ' },
    healthy: { title: 'あなたの健やかな体' },
    self_love: { title: '自分を愛する言葉' },
    optimism: { title: 'あなたの前向きさ' },
    smile: { title: 'あなたの笑顔' },
    angels: { title: '天使たちから' },
    self_care: { title: 'セルフケアの言葉' },
  },

  messages: {
    'amazing.9': '世界の見方が、あなたにしかない特別なものです。',
    'creativity.4': 'あなたの創造的な心は、新鮮な風のようです。',
    'resilience.6': 'つまずいたあとに立ち上がるその力は、本当にすごいです。',
    'kindness.14': 'あなたのやさしさは、与え続けても尽きない贈り物です。',
    'optimism.5': 'あなたの前向きさは伝わって、まわりの人を元気にします。',
    'optimism.11': 'あなたの前向きな心は、世界へのおくりものです。',
    'confidence.168': '話し出す前から、あなたの空気があなたを紹介しています。',
    'soul.7': 'あなたの魂はよろこびで踊り、行く先ざきに幸せを置いていきます。',
  },
};
