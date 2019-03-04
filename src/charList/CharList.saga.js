import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchCharListApi } from './CharList.service';


function* fetchCharListSaga() {
  const response = yield call(fetchCharListApi);

  yield put({
    type: 'FETCH_CHARS_SUCCESS',
    payload: response.data.results
  });
}

export function* charListSagas() {
  yield takeLatest('FETCH_CHARS_TRIGGER', fetchCharListSaga);
}
