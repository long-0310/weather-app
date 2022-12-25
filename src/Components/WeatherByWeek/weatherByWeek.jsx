import React, { useState } from "react";
import { useSelector } from "react-redux";
import { timeFormat } from "../../mixin";
import "./weatherByWeek.scss";

function WeatherByWeek(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const data = useSelector((state) => state.weather.data);

  const [detail, setDetails] = useState(data.daily[0]);

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return (
      days[date.getDay()] + ", " + date.getDate() + "/" + (date.getMonth() + 1)
    );
  };

  return (
    <div className="weather-week">
      <div className="weather-week-inner">
        {data.daily.map((day, index) => (
          <div
            key={index}
            onClick={() => setDetails(day)}
            className="weather-week-item"
          >
            <div
              className={`${
                day.dt === detail.dt ? "bg-day" : ""
              } weather-week-content`}
            >
              <p className="title">{dateFormat(day.dt)}</p>
              <div className="inner-content">
                <img
                  src={`https://openweathermap.org/img/w/${day.weather[0]?.icon}.png`}
                  alt=""
                />
                <p>
                  {Math.round(day.temp.min)}° - {Math.round(day.temp.max)}°
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="day-week">
        <p>{dateFormat(detail.dt)}</p>
        <div className="day-week-inner">
          <div className="left">
            <p>Temp current : {detail.temp?.day} °C</p>
            <p>
              Temp : {detail.temp?.min} °C - {detail.temp?.max} °C
            </p>
            <p>Humidity : {detail.humidity} %</p>
            <p>
              Wind speed : {Math.round(detail.wind_speed * 3.6 * 100) / 100}{" "}
              km/h
            </p>
          </div>
          <div className="right">
            <p>Sunrise : {timeFormat(detail.sunrise)}</p>
            <p>Sunset : {timeFormat(detail.sunrise)}</p>
            <p>Description : {detail?.weather[0]?.description}</p>
            <p>Atmospheric pressure : {detail?.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherByWeek;
