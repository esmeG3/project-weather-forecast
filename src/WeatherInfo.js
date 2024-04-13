import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-8">
            <h1>{props.data.city}</h1>
          </div>
          <div className="col-4">
            <p className="text-capitalize">
              <FormattedDate date={props.data.date} />
              {props.data.description}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <WeatherIcon code={props.data.icon}/>
          </div>
          <div className="col-6">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
          <li>Feels like: {Math.round(props.data.tempFeel)}°C</li>
        </ul>
      </div>
    );
}