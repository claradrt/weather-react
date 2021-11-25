import "./styles.css";
import Section1 from "./Section1";
import Github from "./Github";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Section1 />
        <section className="section2">
          <div className="px-4 forecast"></div>
        </section>
      </div>
      <Github />
    </div>
  );
}
