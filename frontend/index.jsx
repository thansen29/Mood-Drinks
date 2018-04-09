import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app';
import rootReducer from './reducers/root_reducer';

document.addEventListener("DOMContentLoaded", () => {
  const middlewares = [thunk];
  const store = applyMiddleware(...middlewares)(createStore);

  const root = document.getElementById("root");
  ReactDOM.render(
    <Provider store={ store(rootReducer) }>
      <App />
    </Provider>
  , root);
});
