import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
    <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
