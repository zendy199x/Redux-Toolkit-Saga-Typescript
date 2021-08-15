import counterSaga from 'features/counter/counterSaga';
import  { all } from 'redux-saga/effects';

function* helloSaga() {
  yield console.log(`Hello saga`);
}

export default function* rootSaga() {
  yield console.log(`Root saga`);
  yield all([helloSaga(), counterSaga()]);
}