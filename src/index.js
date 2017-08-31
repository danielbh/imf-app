import 'sanitize.css/sanitize.css';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
