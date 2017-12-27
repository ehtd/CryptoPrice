import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const repo = `/${window.location.pathname.split('/'[1])}`;

render((
  <BrowserRouter basename={repo}>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
