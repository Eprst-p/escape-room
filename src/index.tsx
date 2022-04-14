import { StrictMode } from 'react';
import App from 'components/app/app';
import {render} from 'react-dom';
import { store } from './store';
import {Provider} from 'react-redux';


render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

