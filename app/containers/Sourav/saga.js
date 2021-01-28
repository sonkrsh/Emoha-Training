import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
import {selectSouravDomain} from './selectors';

function* myApiData(payload) {
  const formData = yield select(selectSouravDomain);
  console.log(formData.data.username)
  console.log(formData.data.password)
  /* console.log(payload.formvalue.username);
  console.log(payload.formvalue.password); */
}
// Individual exports for testing
export default function* souravSaga() {
  yield takeLatest(DEFAULT_ACTION, myApiData);

  // See example in containers/HomePage/saga.js
}
