import "./App.css";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(./images/clouds.jpg)` }}
    >
      <div className="container">
        <div className="weather-app-wrapper">
          <Weather />
        </div>
        <Github />
      </div>
    </div>
  );
}
