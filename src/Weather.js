import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"className="btn btn-primary"/>
                </div>
            </div></form>
      <h1>New Orleans</h1>
      <ul>
        <li>
            Thursday 12:00
        </li>
        <li>
            Partly cloudy
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy"/>
16°C
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Humidity: 45%
                </li>
                <li>
                    Wind speed: 5 km/h
                </li>
                <li>
                    Precipitation: 12%
                </li>
            </ul>
        </div>
      </div>
        </div>
    );
}