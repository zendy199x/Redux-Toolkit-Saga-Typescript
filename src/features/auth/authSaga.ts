import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  yield console.log(`handle login`, payload);
}

function* handleLogout() {
  yield console.log(`logout`)
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}