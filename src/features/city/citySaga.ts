import cityApi from 'api/cityApi';
import { City } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ListResponse } from './../../models/common';
import { cityActions } from './citySlice';

function* fetchCityList() {
  try {
    const response: ListResponse<City> = yield call(cityApi.getAll);
    yield put(cityActions.fetchCityListSuccess(response));
  } catch (error) {
    console.log(`Failed to fetch city list`, error);
    yield put(cityActions.fetchCityListFailed(error.message));
  }
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
