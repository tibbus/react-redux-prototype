import { call, all, fork } from 'redux-saga/effects';

import { charListSagas } from '../charList/CharList.saga';
import { charDetailsSagas } from '../charDetails/CharDetails.saga';


function* wrapFork(saga, ...args) {
  return yield fork(saga, ...args);
}

const synchronousFork = (saga, ...args) => { return call(wrapFork, saga, ...args); };

export function* sagas() {
  while (true) {
    try {
      yield all([
        synchronousFork(charListSagas),
        synchronousFork(charDetailsSagas)
      ]);
    } catch (e) {
      // All Sagas errors are handled here
      // Each Saga can catch the error manually as well  Ex.. try{ ...} catch{...}
      console.log('General exception handler: ', e);
    }
  }
}
