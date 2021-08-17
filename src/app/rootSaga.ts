import { authSaga } from 'features/auth/authSaga';
import  { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga()]);
}