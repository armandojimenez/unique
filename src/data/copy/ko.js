// 한국어 — warm 해요체, the register Korean self-care apps use. 합쇼체 would
// read like a bank; 반말 would read presumptuous from an app.
//
// Korean has no grammatical gender and drops the second-person pronoun, so
// §3–5 of the expansion plan is satisfied by writing natural Korean; "당신"
// is avoided because it reads distant, and the honorific verb ending
// carries the warmth instead.
//
// canvas.css sets `word-break: keep-all` for :lang(ko) so eojeol never
// break mid-word; heroes stay short and the QA gate guards the rest.
export default {
  hook: { hero: '나를 알아봐 주는\n칭찬' },
  reminders: {
    hero: '하루 종일\n다정한 말',
    date: '1월 1일 월요일',
    time: '11:11',
    whens: ['지금', '오전 11:11', '오전 9:30'],
  },
  categories: { hero: '나의 모든 면에\n어울리는 칭찬' },
  widgets: {
    hero: '홈 화면에서\n만나는 내 가치',
    heroAndroid: '홈 화면에서\n만나는 내 가치',
  },
  themes: { hero: '모든 메시지를\n나답게', sample: '가나' },
  dark: { hero: '밤에도 낮에도\n언제나 함께해요' },
  myown: {
    hero: '듣고 싶은 말을\n직접 써 보세요',
    dialogTyped: '곁에 있으면 누구나 자신이 소중하다고 느껴요.',
    rows: [
      { text: '여기까지 온 나를 마음껏 축하해도 된다.', date: '7월 22일' },
      { text: '쉬는 것은 포기하는 게 아니다.', date: '7월 15일' },
      {
        text: '네가 나눠 주는 사랑만큼, 너도 사랑받을 자격이 있어.',
        author: '엄마',
        date: '7월 7일',
      },
      { text: '나의 다정함이 나를 약하게 만든 적은 없다.', date: '6월 27일' },
      { text: '되어 가고 있는 지금의 내가 좋다.', date: '6월 18일' },
      {
        text: '나에게 다정한 것도 다정함이야.',
        author: '샘',
        date: '6월 9일',
      },
      { text: '내 인정을 굳이 얻어낼 필요는 없다.', date: '6월 1일' },
    ],
  },
  share: { hero: '칭찬을 나누고 싶은\n작품으로' },
  practice: { hero: '나를 사랑하는 일을\n매일의 습관으로' },
  proof: {
    hero: '가장 필요했던 사람들이\n사랑한 앱',
    heroAndroid: '전 세계 사람들이\n사랑하는 앱',
    storeIos: 'App Store 평점',
    storeAndroid: 'Google Play 평점',
    familyTitle: 'Believe 패밀리가 사랑을 담아 만들었어요',
    familySub: '전체 앱 누적 100만 다운로드 이상',
  },
  feature: { hero: '매일의 칭찬과\n자기 사랑', qOpen: '“', qClose: '”' },

  ui: {
    app_name: 'Unique',
    categories: '카테고리',
    reset: '초기화',
    themes: '스타일 선택',
    make_theme: '나만의 테마 만들기',
    settings: { my_favorites_title: '즐겨찾기' },
    my_own: {
      title: '내 메시지',
      add: '추가',
      added: '추가한 날: {}',
      add_dialog_title: '나만의 문장을 추가하세요!',
      save: '저장',
      author_hint: '작성자 (선택)',
    },
    backup: { backup_and_restore_button: '백업 및 복원' },
    share: {
      story: '스토리',
      square: '정사각형',
      save_image: '저장',
      copy_text: '복사',
      more: '더보기',
    },
    magic_center: { practice: { day: '낮', night: '밤' } },
    everything: { title: '나만의 특별함' },
    favorites: { title: '즐겨찾기' },
    mine: { title: '내가 쓴 메시지' },
    smart: { title: '나의 지성' },
    resilience: { title: '나의 회복력' },
    beauty: { title: '나의 아름다움' },
    kindness: { title: '나의 다정함' },
    in_love: { title: '사랑의 말' },
    amazing: { title: '나의 멋진 점' },
    gratitude: { title: '나의 감사' },
    creativity: { title: '나의 창의력' },
    soul: { title: '나의 영원한 영혼' },
    confidence: { title: '자신감을 주는 말' },
    future_self: { title: '미래에서 온 메시지' },
    healthy: { title: '건강한 나의 몸' },
    self_love: { title: '자기 사랑의 말' },
    optimism: { title: '나의 낙천성' },
    smile: { title: '나의 미소' },
    angels: { title: '천사들이 전하는 말' },
    self_care: { title: '나를 돌보는 말' },
  },

  messages: {
    'amazing.9': '세상을 바라보는 방식이 당신만의 특별한 것이에요.',
    'creativity.4': '당신의 창의적인 마음은 신선한 바람 같아요.',
    'resilience.6': '넘어진 뒤에 다시 일어서는 힘이 정말 대단해요.',
    'kindness.14': '당신의 다정함은 아무리 나눠도 줄지 않는 선물이에요.',
    'optimism.5': '당신의 밝은 마음은 옮아가서 곁에 있는 사람을 일으켜 세워요.',
    'optimism.11': '당신의 밝은 마음은 세상에 건네는 선물이에요.',
    'confidence.168': '말을 꺼내기도 전에 당신의 기운이 먼저 당신을 소개해요.',
    'soul.7': '당신의 영혼은 기쁘게 춤추며 가는 곳마다 행복을 남겨요.',
  },
};
