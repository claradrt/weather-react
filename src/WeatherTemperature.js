import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="current-temperature">
        <h2 id="current-temperature">
          {props.celsius}
          <span className="units">
            <strong>ºC</strong> |{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              ºF
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="current-temperature">
        <h2 id="current-temperature">
          {fahrenheitTemp}
          <span className="units">
            <a href="/" onClick={showCelsius}>
              ºC
            </a>{" "}
            | <strong>ºF</strong>
          </span>
        </h2>
      </div>
    );
  }
}
