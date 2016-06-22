import { INCREASE, DECREASE } from '../actions/ActionTypes';

export function info(state = {
  text: 'Sample',
  clicks: 0
}, action) {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, {
        text: 'Sample+',
        clicks: state.clicks + 1
      });
    case DECREASE:
      return Object.assign({}, state, {
        text: 'Sample-',
        clicks: state.clicks + 1
      });
    default:
      return state;
  }
}

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}