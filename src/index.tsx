import { StrictMode } from 'react';
import App from 'components/app/app';
import {render} from 'react-dom';
import { store } from './store';
import {Provider} from 'react-redux';
import { fetchQuests } from './store/api-actions';
import { useAppSelector } from './hooks/redux-hooks';
import { getAllQuests } from './store/selectors';

store.dispatch(fetchQuests());


render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

