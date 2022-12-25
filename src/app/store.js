import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/watchGetData/weatherSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
