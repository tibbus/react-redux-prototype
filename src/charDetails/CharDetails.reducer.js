const INITIAL_STATE = {
  loaded: {},
  active: null
};

export function charDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_CHAR_DETAIL_SUCCESS':
      return {
        loaded: {
          ...state.loaded,
          [action.payload.id]: action.payload
        },
        active: action.payload
      };
    default:
      return state;
  }
}