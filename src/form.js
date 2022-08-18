import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="form">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              className="text"
              type="text"
              id="text"
              placeholder="Type the name of the city"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="col-2">
            <input className="button" type="submit" value="🔍" />
          </div>
          <div className="col-1">
            <button id="location-button">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </button>
          </div>
        </div>
      </form>
      <p id="label">
        You can select a city to see its current weather or check weather for
        your current location.
      </p>
    </div>
  );
}
