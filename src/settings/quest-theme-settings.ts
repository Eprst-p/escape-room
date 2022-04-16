export enum QuestTheme {
  AllQuests = 'allQuests',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const questTypes = ['allQuests', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi'] as const;

export const themeNames = {
  allQuests: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;
