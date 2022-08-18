import "./styles.css";
import Form from "./form";
import CurrentWeather from "./current-weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <Form />
      <hr />
      <h1>Nicosia, CY</h1>
      <div className="current-date">
        <span className="parameter">Weather for:</span>
        <span className="value" id="current-date-time">
          {" "}
          10/08/2022 15:21
        </span>
      </div>
      <CurrentWeather />
      <hr />
    </div>
  );
}
