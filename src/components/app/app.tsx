import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
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


const App = () => {
  const isDataLoaded = useAppSelector(getIsDataLoaded);


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.Quest}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Catalog}>
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
