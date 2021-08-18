import { dashboardActions } from './dashboardSlice';
import { takeLatest } from 'redux-saga/effects';

function* fetchDashboardData() {

}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
