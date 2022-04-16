import { StrictMode } from 'react';
import App from 'components/app/app';
import {render} from 'react-dom';
import { store } from './store';
import {Provider} from 'react-redux';
import { fetchQuests } from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useAppSelector } from './hooks/redux-hooks';
import { getAllQuests } from './store/selectors';

store.dispatch(fetchQuests());


render(
  <StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

