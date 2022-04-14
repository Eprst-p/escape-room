import { StrictMode } from 'react';
import App from 'components/app/app';
import {render} from 'react-dom';


render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
