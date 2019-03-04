import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchCharListApi } from './CharList.service';
import { FETCH_CHARS_SUCCESS, FETCH_CHARS_TRIGGER }  from './CharList.action';


/**
 * Saga used to fetch the Character List
 */
function* fetchCharListSaga() {
  const response = yield call(fetchCharListApi);

  yield put({
    type: FETCH_CHARS_SUCCESS,
    payload: response.data.results
  });
}

export function* charListSagas() {
  yield takeLatest(FETCH_CHARS_TRIGGER, fetchCharListSaga);
}
