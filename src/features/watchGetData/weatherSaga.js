import getAPI from "../../api/getApi";
import { put, takeEvery } from "redux-saga/effects";
import {
  getCity,
  getCitySuccess,
  getData,
  getDataSuccess,
} from "./weatherSlice";

function* handleWeather(action) {
  try {
    const res = yield getAPI.getData(action.payload);
    yield put(getDataSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

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
  yield takeEvery(getData.type, handleWeather);
  yield takeEvery(getCity.type, handleWeatherCity);
}
