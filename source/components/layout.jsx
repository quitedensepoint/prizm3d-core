//Class Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import scene from '../reducers/reducers.js';
import App from './app.js';

let store = createStore(scene)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('viewer')
)
