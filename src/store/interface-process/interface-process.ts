import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import { QuestTheme } from '../../settings/quest-theme-settings';
import {InterfaceProcess} from '../../types/state';


const initialState: InterfaceProcess = {
  activeTheme: QuestTheme.AllQuests,
  bookingModalStatus: false,
};

export const interfaceProcess = createSlice({
  name: NameSpace.Interface,
  initialState,
  reducers: {
    changeTheme: (state, {payload}) => {state.activeTheme = payload},
    setBookingModalStatus: (state, {payload}) => {state.bookingModalStatus = payload},
  },
});

export const {changeTheme, setBookingModalStatus} = interfaceProcess.actions;
