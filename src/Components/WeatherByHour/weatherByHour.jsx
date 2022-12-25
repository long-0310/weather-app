import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { timeFormat } from "../../mixin";
import "./weatherByHour.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  Point,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function WeatherByHour(props) {
  const data = useSelector((state) => state.weather.data);

  const hours = [];
  const temp = [];
  const feel = [];
  const getHours = data?.hourly.map((hour) => [...hours, timeFormat(hour.dt)]);
  const getTemp = data?.hourly.map((hour) => [...temp, hour.temp]).flat();
  const getFeelslike = data?.hourly
    .map((el) => [...feel, el.feels_like])
    .flat();

  const [hour, setHour] = useState({
    labels: getHours,
    datasets: [
      {
        label: " Temp (°C)",
        data: getTemp,
        borderColor: "#8e5ea2",
        fill: false,
      },
      {
        label: " Feel like (°C)",
        data: getFeelslike,
        borderColor: "#3cba9f",
        fill: false,
      },
    ],
  });

  return (
    <div className="weather-hour">
      <Line data={hour}></Line>
    </div>
  );
}

export default WeatherByHour;
