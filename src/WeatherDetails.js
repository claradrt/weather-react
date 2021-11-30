import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate.js";

export default function WeatherDetails(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  function handleResponse(response) {
    console.log("Response:", response.data);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      weather_icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (props.city !== city) {
    //console.log(props.city);
    const apiKey = "030aaa048ccf382ba4335184bb827f63";
    setCity(props.city);
    console.log("City from If condition in WeatherDetails:", props.city);
    let tempUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${tempUnit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="WeatherDetails">
      <h1 id="city-name">
        {props.city}, {weatherData.country}
      </h1>
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
                src={weatherData.weather_icon}
                alt={weatherData.description}
                id="current-weather-icon"
              />
              <div className="text-capitalize" id="current-weather-description">
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
      <div className="local-date">
        <FormattedDate date={weatherData.date} />
      </div>
      <hr />
    </div>
  );
}
