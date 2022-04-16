import { ThemeProvider } from 'styled-components';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound404 from '../not-found/not-found';
import { appTheme } from './common';
import * as S from './app.styled';
import React from 'react';
import { AppRoute } from '../../settings/app-routes';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getIsDataLoaded } from '../../store/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history/browser-history';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <Routes>
          <Route
            path={AppRoute.Catalog}
            element={<Home />}
          />
          <Route
            path={AppRoute.Quest}
            element={<DetailedQuest />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<Contacts />}
          />
          <Route
            path="*"
            element={<NotFound404 />}
          />
        </Routes>
      </ThemeProvider>
    </HistoryRouter >
  );
};

export default App;
