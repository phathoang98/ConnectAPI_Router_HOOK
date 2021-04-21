import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ---- import Store
import { Provider } from 'react-redux'
import store from './Redux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root')
);


reportWebVitals();
