import { delay, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';
import { push } from 'connected-react-router';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // yield call(api, '')
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        // Dispatch action
        id: 1,
        name: 'Zendy',
      })
    );

    // Redirect to Admin page
    yield put(push('/admin/dashboard'));
  } catch (error) {
    yield put(authActions.loginFailed(error.message)); // Dispatch action
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');

  // Redirect to Login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload); // Non-blocking
    }

    yield take(authActions.logout.type);
    yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
