import React, { useState } from "react";
import axios from "axios";

import Search from "./Search.js";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <section className="Weather">
        <Search />
        <h1 id="city-name">{weatherData.city}</h1>
        <div id="current-location-wrapper">
          <div id="current-location">
            <i className="fas fa-map-marker-alt" id="location-icon"></i>
            <span id="my-location">My location</span>
          </div>
        </div>
        <div className="current-temperature">
          <h2 id="current-temperature">
            {weatherData.temp}
            <span className="units">ºC</span>
          </h2>
        </div>
        <div className="row weather-info-wrapper">
          <div className="col-6">
            <div className="right-col">
              <div className="current-weather">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="weather-icon"
                  id="current-weather-icon"
                />
                <div
                  className="text-capitalize"
                  id="current-weather-description"
                >
                  {weatherData.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="current-weather-metrics">
              <p id="humidity">Humidity: {weatherData.humidity}%</p>
              <p id="wind-speed">Wind: {weatherData.windSpeed}m/s</p>
            </div>
          </div>
        </div>
        <div className="local-date">Date and time</div>
        <hr />
      </section>
    );
  } else {
    const apiKey = "d4b52f25cca475cc7e5c04f3d7f22761";
    let cityName = "Madrid";
    let tempUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${tempUnit}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
