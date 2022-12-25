import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar/sideBar";
import Weather from "../../Components/Weather/Weather";
import { getCity, getData } from "../../features/watchGetData/weatherSlice";

import "./homePage.scss";

function HomePage(props) {
  return (
    <div className="homepage ">
      <SideBar />
      <Weather />
    </div>
  );
}

export default HomePage;
