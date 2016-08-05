import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app.jsx';
import rootReducer from './reducers/reducers';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/style.css';
import 'babel-polyfill';

ReactDOM.render(<App />, document.querySelector('#app'));

// The entry point of our app must accept hot reloading in dev environment
if (module.hot) {
  module.hot.accept();
}
