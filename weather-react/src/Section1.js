import React from "react";
import Search from "./Search.js";

import "./Section1.css";

export default function Section1() {
  return (
    <section className="section1">
      <Search />
      <h1 id="city-name">Madrid</h1>
      <div id="current-location-wrapper">
        <div id="current-location">
          <i className="fas fa-map-marker-alt" id="location-icon"></i>
          <span id="my-location">My location</span>
        </div>
      </div>
      <div className="current-temperature">
        <h2 id="current-temperature">
          <span className="units">19ºC</span>
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
              <div id="current-weather-description">Blue sky</div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="current-weather-metrics">
            <p id="humidity">Humidity</p>
            <p id="wind-speed">Wind speed</p>
          </div>
        </div>
      </div>
      <div className="local-date">Date and time</div>
      <hr />
    </section>
  );
}
