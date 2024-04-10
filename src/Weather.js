import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, SetWeatherData] = useState({ ready: false});

function handleResponse(response) {
    SetWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      tempFeel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: "Thursday, 12:00",
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });


}

if (weatherData.ready) {
       return (
         <div className="Weather">
           <form>
             <div className="row">
               <div className="col-9">
                 <input
                   type="search"
                   placeholder="Enter a city..."
                   className="form-control"
                   autoFocus="on"
                 />
               </div>
               <div className="col-3">
                 <input
                   type="submit"
                   value="Search"
                   className="btn btn-secondary w-100"
                 />
               </div>
             </div>
           </form>
           <div className="row">
             <div className="col-8">
               <h1>{weatherData.city}</h1>
             </div>
             <div className="col-4">
               <p className="text-capitalize">
                 {weatherData.date}
                 <br />
                 {weatherData.description}
               </p>
             </div>
           </div>
           <div className="row">
             <div className="col-6">
               <img
                 src={weatherData.icon}
                 alt={weatherData.description}
               />
             </div>
             <div className="col-6">
               <span className="temperature">{Math.round(weatherData.temperature)}</span>
               <span className="unit">°C</span>
             </div>
           </div>
           <ul>
             <li>Humidity: {weatherData.humidity}%</li>
             <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
             <li>Feels like: {Math.round(weatherData.tempFeel)}°C</li>
           </ul>
         </div>
       );    
} else {

    const apiKey = "8161b4309ee03faae957729ba7104797";
    let city = "New Orleans";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        "Loading..."
    );

}

   
}