import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Madrid");

  function handleSearch(city) {
    console.log("City from Weather component:", city);
    setCity(city);
  }

  return (
    <section className="Weather">
      <Search onSearch={handleSearch} />
      <WeatherDetails city={city} />
    </section>
  );
}
