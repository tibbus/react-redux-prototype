import { combineReducers } from 'redux';

import { CharListReducer } from './charList/CharList.reducer';
import { CharDetailsReducer } from './charDetails/CharDetails.reducer';


export const reducers = combineReducers({
  charList: CharListReducer,
  charDetails: CharDetailsReducer
});
