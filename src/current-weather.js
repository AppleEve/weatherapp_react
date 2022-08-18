import React from "react";
import "./current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="currentWeather row">
      <div className="col-5 main-image">
        <i className="fa-solid fa-sun"></i>
      </div>
      <div className="col-2">
        <h2>
          <span id="big-nbr">34</span>
          <span className="active-scale" id="celsius-scale">
            &#176;C
          </span>
        </h2>
      </div>
      <div className="col-sm-5">
        <p className="weather-properties">
          <span className="parameter">Weather: </span>
          <span className="value" id="weather-description">
            Sunny
          </span>
          <br />
          <span className="parameter">Humidity: </span>
          <span className="value" id="humidity-value">
            20%
          </span>
          <br />
          <span className="parameter">Wind: </span>
          <span className="value" id="wind-value">
            2 km/h
          </span>
        </p>
      </div>
    </div>
  );
}
