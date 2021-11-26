import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <section className="WeatherForecast">
      <div className="px-4 forecast"></div>
    </section>
  );
}
