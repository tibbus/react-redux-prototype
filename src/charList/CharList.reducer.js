export function CharListReducer(state = [], action) {
  switch (action.type) {
    case 'SET_CHARS':
      return action.payload;
    default:
      return state;
  }
}