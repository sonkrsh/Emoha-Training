import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';

function* myApiData() {
  console.log('this is my saga');
}
// Individual exports for testing
export default function* souravSaga() {
  yield takeLatest(DEFAULT_ACTION, myApiData);

  // See example in containers/HomePage/saga.js
}
