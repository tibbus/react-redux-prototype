import { combineReducers } from 'redux';

import { charsReducer } from './chars/Chars.reducer';


export const reducers = combineReducers({
  chars: charsReducer
});
