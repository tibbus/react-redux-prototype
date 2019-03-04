export function charListReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CHARS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}