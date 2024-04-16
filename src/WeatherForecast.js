import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className = "row">
                <div className="col">
<div className="weatherForecast-day">
    Sun
</div>
<WeatherIcon code={"01d"} size={42}/>
<div>
    <span className="weatherForecast-temp-max">22°</span> 
    <span className="weatherForecast-temp-min">12°</span>
</div>
        </div>
        </div>
        </div>
    )
}
