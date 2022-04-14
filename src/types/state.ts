import { QuestType, QuestTypes } from "./quest-type";

export type DataProcess = {
  isDataLoaded: boolean;
  quests: QuestTypes;
  quest: QuestType;
  questID: number;
};

export type InterfaceProcess = {
  questThemes: string[];
  activeTheme: string;
};

