import {State} from '../types/state'
import {createSelector} from 'reselect';
import { QuestTheme } from '../settings/quest-themes';

export const getAllQuests = (state:State) => state.DATA.quests;
export const getQuest = (state:State) => state.DATA.quest;
export const getQuestID = (state:State) => state.DATA.questID;
export const getIsDataLoaded = (state:State) => state.DATA.isDataLoaded;

export const getActiveTheme = (state:State) => state.INTERFACE.activeTheme;
export const getQuestsByTheme = createSelector(getAllQuests, getActiveTheme, (allQuests, activeTheme) => {
  if (activeTheme===QuestTheme.AllQuests) {
    return allQuests;
  }
  return allQuests.filter((quest) => quest.type === activeTheme);
});


