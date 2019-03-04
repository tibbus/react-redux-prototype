import { takeLatest, call, put, select } from 'redux-saga/effects';

import { fetchCharListApi } from './CharList.service';
import { FETCH_CHARS_SUCCESS, FETCH_CHARS_TRIGGER }  from './CharList.action';
import { charListSelector } from './CharList.selector';


/**
 * Saga used to fetch the Character List
 */
function* fetchCharListSaga() {
  const chars = yield select(charListSelector);
  // Fetch characters only a single time
  if (chars.length !== 0) {
    return;
  }
  const response = yield call(fetchCharListApi);

  yield put({
    type: FETCH_CHARS_SUCCESS,
    payload: response.data.results
  });
}

export function* charListSagas() {
  yield takeLatest(FETCH_CHARS_TRIGGER, fetchCharListSaga);
}
