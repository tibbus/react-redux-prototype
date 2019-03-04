import { combineReducers } from 'redux';
import { counterReducer } from './counter/Counter.reducer';

export const reducers = combineReducers({
  counter: counterReducer
});
