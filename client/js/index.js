import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CheeseList from './components/cheese-list';
import {Provider} from 'react-redux';
import store from './store';


console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <Provider store={store}>
      <CheeseList />
    </Provider>,
    document.getElementById('app'))
);
