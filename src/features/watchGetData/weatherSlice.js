import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  dataCity: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getCity: (state, action) => {
      state.loading = true;
    },
    getCitySuccess: (state, action) => {
      state.loading = false;
      state.dataCity = action.payload;
    },
  },
});

export const { getData, getDataSuccess, getCity, getCitySuccess } =
  weatherSlice.actions;
const weatherReducer = weatherSlice.reducer;
export default weatherReducer;
