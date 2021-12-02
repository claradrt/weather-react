import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import Search from "./Search";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [city, setCity] = useState("Madrid");
  const [coord, setCoord] = useState("");

  function handleSearch(city) {
    console.log("City from Weather component:", city);
    setCity(city);
  }

  function getCoordinates(coord) {
    console.log("Coordinates passed to Weather component:", coord);
    setCoord(coord);
  }

  return (
    <section className="Weather">
      <Search onSearch={handleSearch} />
      <WeatherDetails city={city} passCoord={getCoordinates} />
      {coord && <WeatherForecast coordinates={coord} />}
    </section>
  );
}
