
import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/esmeG3" target="_blank" rel="noreferrer">
          Esme G
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/esmeG3/project-weather-forecast"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://forecast-theweather.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netfliy
        </a>
      </footer>
      </div>
    </div>
  );
}


