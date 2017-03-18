import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese';

const middlewares = [thunk, logger()];
const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
export default createStore(cheeseReducer, undefined, enhancer);
