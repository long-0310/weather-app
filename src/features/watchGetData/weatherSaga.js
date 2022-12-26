import getAPI from "../../api/getApi";
import { put, takeEvery } from "redux-saga/effects";
import { getCity, getCitySuccess, getDataSuccess } from "./weatherSlice";

function* handleWeatherCity(action) {
  try {
    const dataCity = yield getAPI.getDataCity(action.payload);
    yield put(getCitySuccess(dataCity));
    const city = {
      latitude: dataCity.coord?.lat,
      longitude: dataCity.coord?.lon,
    };
    const res = yield getAPI.getData(city);
    yield put(getDataSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

export function* watchGetData() {
  yield takeEvery(getCity.type, handleWeatherCity);
}
