import { QuestType, QuestTypes } from "./quest-type";
import { store } from "../store";

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

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


