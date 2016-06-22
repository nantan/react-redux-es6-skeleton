import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import { info, counter } from './reducers';
import DevTools from './containers/DevTools';

const rootReducer = combineReducers({
  info,
  counter,
  routing: routerReducer
});

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      createLogger()
    ),
    DevTools.instrument()
  );
  return createStore(rootReducer, initialState, enhancer);
}