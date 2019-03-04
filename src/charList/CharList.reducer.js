import { FETCH_CHARS_SUCCESS }  from './CharList.action';


export function charListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CHARS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}