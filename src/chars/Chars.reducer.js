export function charsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_CHARS':
      return action.payload;
    default:
      return state;
  }
}