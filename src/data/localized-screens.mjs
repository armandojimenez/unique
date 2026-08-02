// Landing screen data derived from the reviewed Unique screenshot-studio
// locale modules. Keeping one source prevents English UI from leaking into a
// translated landing route and keeps the animated landing scenes in parity
// with their approved store screenshots.
import { LOCALE_COPY } from './copy/index.js';
import generatedSections from './generated/sections.json' with { type: 'json' };
import generatedHeroCards from './generated/hero-cards.json' with { type: 'json' };

const message = (copy, id) => {
  const value = copy.messages[id];
  return typeof value === 'string' ? { text: value } : { text: value.body, author: value.author };
};

const addedLabel = (value) =>
  value.replace(/\s*[:：]?\s*\{\}\s*$/, '').trim();

const categoryKeys = [
  'everything',
  'favorites',
  'mine',
  'beauty',
  'resilience',
  'smart',
  'kindness',
  'creativity',
];

export const sections = {
  en: generatedSections.en,
  ...Object.fromEntries(
    Object.entries(LOCALE_COPY).filter(([locale]) => locale !== 'en').map(([locale, copy]) => [
    locale,
    {
      categoriesTitle: copy.ui.categories,
      categories: categoryKeys.map((key) => ({
        key,
        title: copy.ui[key].title,
      })),
      card: {
        quote: message(copy, 'amazing.9'),
        label: copy.ui.amazing.title,
      },
      reminders: {
        pill: message(copy, 'creativity.4').text,
        notifications: [
          {
            text: message(copy, 'resilience.6').text,
            when: copy.reminders.whens[0],
          },
          {
            text: message(copy, 'kindness.14').text,
            when: copy.reminders.whens[1],
          },
        ],
      },
      widgets: {
        medium: message(copy, 'resilience.6').text,
        smallDark: message(copy, 'confidence.168').text,
        smallPink: message(copy, 'kindness.14').text,
        medium2: message(copy, 'soul.7').text,
      },
      themes: {
        title: copy.ui.themes,
        make: copy.ui.make_theme,
      },
      share: {
        quote: message(copy, 'confidence.168'),
        story: copy.ui.share.story,
        square: copy.ui.share.square,
        save: copy.ui.share.save_image,
        copy: copy.ui.share.copy_text,
        more: copy.ui.share.more,
      },
      myown: {
        title: copy.ui.my_own.title,
        add: copy.ui.my_own.add,
        backup: copy.ui.backup.backup_and_restore_button,
        added: addedLabel(copy.ui.my_own.added),
        dialogTitle: copy.ui.my_own.add_dialog_title,
        authorHint: copy.ui.my_own.author_hint,
        save: copy.ui.my_own.save,
      },
      practice: {
        quote: message(copy, 'kindness.14'),
        day: copy.ui.magic_center.practice.day,
        night: copy.ui.magic_center.practice.night,
      },
      bands: [
        message(copy, 'creativity.4'),
        message(copy, 'optimism.5'),
        message(copy, 'soul.7'),
        message(copy, 'optimism.11'),
      ],
    },
    ])
  ),
};

export const heroCards = {
  en: generatedHeroCards.en,
  ...Object.fromEntries(
    Object.entries(LOCALE_COPY).filter(([locale]) => locale !== 'en').map(([locale, copy]) => [
    locale,
    {
      appName: copy.ui.app_name,
      whens: copy.reminders.whens,
      pill: message(copy, 'creativity.4').text,
      cards: [
        message(copy, 'amazing.9'),
        message(copy, 'resilience.6'),
        message(copy, 'kindness.14'),
        message(copy, 'confidence.168'),
      ],
    },
    ])
  ),
};
