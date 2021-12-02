import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log("Forecast response:", response.data.daily);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <section className="WeatherForecast">
        <div className="row forecast">
          {forecastData.map((dailyForecast, index) => {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "030aaa048ccf382ba4335184bb827f63";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
