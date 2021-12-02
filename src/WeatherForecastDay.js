import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[day];
  }

  return (
    <div className="next-day-forecast my-1">
      <div className="day-of-week">{day()}</div>
      <img
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="weather-icon"
        id="weather-icon"
      />
      <div className="row min-max-temp">
        <div className="col-6 max-temp">{Math.round(props.data.temp.max)}º</div>
        <div className="col-6 min-temp">{Math.round(props.data.temp.min)}º</div>
      </div>
    </div>
  );
}
