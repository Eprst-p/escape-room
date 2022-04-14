export type QuestType = {
  id: number
  title: string
  description: string
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number
}

export type QuestTypes = QuestType[];

