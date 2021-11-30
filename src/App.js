import "./App.css";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Weather />
      </div>
      <Github />
    </div>
  );
}
