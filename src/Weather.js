import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"className="btn btn-secondary w-100"/>
                </div>
            </div></form>
        
      <h1>New Orleans</h1>
<p>
            Thursday 12:00
            <br/>
            Partly Cloudy
            </p>
   
      <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy"/>
  </div>
    <div className="col-6">
  <span className="temperature">16</span><span className="unit">°C</span>
  </div>
    </div>   
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
    );
}