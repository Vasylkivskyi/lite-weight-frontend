import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/redux_modules/reducers';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export function initializeStore(state = initialState) {
  return createStore(reducers, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
