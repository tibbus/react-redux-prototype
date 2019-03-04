import { takeLatest, call, put, select } from 'redux-saga/effects';

import { fetchCharDetailsApi } from './CharDetails.service';
import { loadedCharsSelector } from './CharDetails.selector';


function* fetchCharDetailsSaga(action) {
  const charId = action.payload;
  // Check if the Char was already loaded, if so, load it from loaded cache
  const loadedChars = yield select(loadedCharsSelector);
  let activeChar = loadedChars[charId]

  if (!activeChar) {
    // Otherwise, request the Char from the server
    const response = yield call(fetchCharDetailsApi, charId);
    activeChar = response.data;
  }

  yield put({
    type: 'FETCH_CHAR_DETAIL_SUCCESS',
    payload: activeChar
  });
}

export function* charDetailsSagas() {
  yield takeLatest('FETCH_CHAR_DETAIL_TRIGGER', fetchCharDetailsSaga);
}
