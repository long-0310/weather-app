import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getData } from "../../features/watchGetData/weatherSlice";
import { timeFormat } from "../../mixin";
import "./sideBar.scss";

function SideBar(props) {
  const dispatch = useDispatch();
  const dataCity = useSelector((state) => state.weather.dataCity);
  const data = useSelector((state) => state.weather.data);
  const [search, setSearch] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return days[date.getDay()];
  };

  const filterImg = dataCity?.weather?.[0]?.main
    ? dataCity?.weather?.[0]?.main
    : "atmosphere";

  const country = "Hanoi";

  // console.log(dataCity.coord?.lat, dataCity.coord?.lon);

  function handleFindCity(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getCity(search));
    setSearch("");
  };
  useEffect(() => {
    dispatch(getCity(country));
  }, [dispatch]);

  return (
    <div className="side-bar">
      <div className="side-bar-inner">
        <form onSubmit={onSubmit}>
          <input
            value={search}
            placeholder="Search..."
            className="search"
            type="text"
            onChange={(e) => handleFindCity(e)}
          />
        </form>
        <img
          className="side-img"
          src={require(`../../img/${filterImg}.png`)}
          alt=""
        />
        <h3>{dataCity.name}</h3>
        <h2>{data.current?.temp}°C</h2>
        <h4>
          {dateFormat(data.current?.dt)}, {timeFormat(data.current?.dt)}{" "}
        </h4>
        <p> {data.current?.weather[0]?.description}</p>
        <p>
          {data.current?.weather[0]?.main} {`${data.current?.clouds}%`}
        </p>
        <div className="banner-side">
          <p>{dataCity.name}</p>
          <img src={require("../../img/banner.webp")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
