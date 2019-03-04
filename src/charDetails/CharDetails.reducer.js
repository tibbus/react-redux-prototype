import { FETCH_CHAR_DETAIL_SUCCESS } from './CharDetails.action';


const INITIAL_STATE = {
  // cached characters
  loaded: {},
  // currently active character
  active: null
};

export function charDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHAR_DETAIL_SUCCESS:
      const activeChar = action.payload;
      return {
        loaded: {
          ...state.loaded,
          [activeChar.id]: activeChar
        },
        active: activeChar
      };
    default:
      return state;
  }
}