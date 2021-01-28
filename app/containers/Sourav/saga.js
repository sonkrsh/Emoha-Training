import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';

function* myApiData(payload) {
  console.log(payload.formvalue.username);
  console.log(payload.formvalue.password);
}
// Individual exports for testing
export default function* souravSaga() {
  yield takeLatest(DEFAULT_ACTION, myApiData);

  // See example in containers/HomePage/saga.js
}
