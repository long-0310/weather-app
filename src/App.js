import React, { useEffect } from "react";
import "./App.css";

import HomePage from "./pages/homePage/homePage";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar/sideBar";
import WeatherByDay from "./Components/WeatherByDay/weatherByDay";
import WeatherByWeek from "./Components/WeatherByWeek/weatherByWeek";
import WeatherByHour from "./Components/WeatherByHour/weatherByHour";
import { useDispatch } from "react-redux";
import { getCity, getData } from "./features/watchGetData/weatherSlice";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<WeatherByDay />} />
          <Route path="week" element={<WeatherByWeek />} />
          <Route path="hour" element={<WeatherByHour />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
