import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './core/Store';
import './index.css';
import Router from './core/Router';


ReactDOM.render((
  <Provider store={store}>
    <Router />
  </Provider>
), document.getElementById('root'));
