import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log("Forecast response:", response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  const apiKey = "030aaa048ccf382ba4335184bb827f63";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <section className="WeatherForecast">
      <div className="px-4 row forecast">
        <div className="col next-day-forecast">
          <div className="day-of-week">Thu</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            id="weather-icon"
          />
          <div className="row min-max-temp">
            <div className="col-6 max-temp">20º</div>
            <div className="col-6 min-temp">15º</div>
          </div>
        </div>
      </div>
    </section>
  );
}
