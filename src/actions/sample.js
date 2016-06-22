import { INCREASE, DECREASE } from './ActionTypes';

export function increase(num) {
  return {
    type: INCREASE,
    value: num
  };
}

export function decrease(num) {
  return {
    type: DECREASE,
    value: num
  };
}