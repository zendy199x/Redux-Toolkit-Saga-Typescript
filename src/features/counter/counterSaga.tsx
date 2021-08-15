import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction) {
//   yield console.log(`Log`, action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log(`Waiting 1s`);
  // Wait 1s
  yield delay(1000)

  console.log(`Waiting done, dispatch action`)
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield console.log(`Counter saga`);

  // yield takeEvery('*', log);
  // yield takeEvery(increment().type, log);
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}