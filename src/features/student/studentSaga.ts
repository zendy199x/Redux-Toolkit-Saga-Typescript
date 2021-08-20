import { ListResponse } from './../../models/common';
import { PayloadAction } from '@reduxjs/toolkit';
import { studentActions } from './studentSlice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ListParams, Student } from 'models';
import studentApi from 'api/studentApi';

function* fetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Student> = yield call(
      studentApi.getAll,
      action.payload
    );
    yield put(studentActions.fetchStudentListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch student list', error);
    yield put(studentActions.fetchStudentListFailed(error.message));
  }
}

export default function* studentSaga() {
  yield takeLatest(studentActions.fetchStudentList.type, fetchStudentList);
}
