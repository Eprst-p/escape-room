import {State} from '../types/state'
import {createSelector} from 'reselect';

export const getAllQuests = (state:State) => state.DATA.quests;
export const getQuest = (state:State) => state.DATA.quest;
export const getQuestID = (state:State) => state.DATA.questID;

export const getActiveTheme = (state:State) => state.INTERFACE.activeTheme;
export const getQuestsByTheme = createSelector(getAllQuests, getActiveTheme, (allQuests, activeTheme) => allQuests.filter((quest) => quest.type === activeTheme));


