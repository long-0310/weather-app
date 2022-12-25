import { all } from "redux-saga/effects";
import { watchGetData } from "../features/watchGetData/weatherSaga";

export function* rootSaga() {
  yield all([watchGetData()]);
}
