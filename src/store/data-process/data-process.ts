import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {DataProcess} from '../../types/state';


const initialState: DataProcess = {
  isDataLoaded: false,
  quests: [],
  quest: undefined,
  questID: 0,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadQuests: (state, {payload}) => {
      state.quests = payload;
      state.isDataLoaded = true;
    },
    loadQuest: (state, {payload}) => {state.quest = payload},
    setQuestID: (state, {payload}) => {state.questID = payload},
  },
});

export const {loadQuests, loadQuest, setQuestID} = dataProcess.actions;
