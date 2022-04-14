import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import { QuestTheme } from '../../settings/quest-themes';
import {InterfaceProcess} from '../../types/state';


const initialState: InterfaceProcess = {
  activeTheme: QuestTheme.AllQuests,
};

export const interfaceProcess = createSlice({
  name: NameSpace.Interface,
  initialState,
  reducers: {
    changeTheme: (state, {payload}) => {state.activeTheme = payload},
  },
});

export const {changeTheme} = interfaceProcess.actions;
