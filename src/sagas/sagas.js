import { takeLatest } from 'redux-saga/effects';

function * rootSaga () {
  yield takeLatest(null, null);
}

export default rootSaga;
