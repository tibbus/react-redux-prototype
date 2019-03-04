import { combineReducers } from 'redux';

import { charListReducer } from '../charList/CharList.reducer';
import { charDetailsReducer } from '../charDetails/CharDetails.reducer';


export const reducers = combineReducers({
  charList: charListReducer,
  charDetails: charDetailsReducer
});
