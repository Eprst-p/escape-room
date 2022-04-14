import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {InterfaceProcess} from '../../types/state';


const initialState: InterfaceProcess = {
  questThemes: ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'],
  activeTheme: 'Все квесты',
};

export const interfaceProcess = createSlice({
  name: NameSpace.Interface,
  initialState,
  reducers: {
    changeTheme: (state, {payload}) => {state.activeTheme = payload},
  },
});

export const {changeTheme} = interfaceProcess.actions;
