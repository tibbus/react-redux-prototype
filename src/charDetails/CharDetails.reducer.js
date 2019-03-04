const INITIAL_STATE = {
  loaded: {},
  active: null
};

export function CharDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CHAR':
      return {
        ...state,
        loaded: {
          [action.payload.id]: action.payload
        },
        active: action.payload
      };
    default:
      return state;
  }
}