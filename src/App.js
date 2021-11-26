import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Github from "./Github";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Weather />
        <WeatherForecast />
      </div>
      <Github />
    </div>
  );
}
