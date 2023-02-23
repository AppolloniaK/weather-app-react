import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
return (
<div className="WeatherInfo">
    <h1>{props.weatherData.city}</h1>
<ul>
    <li>
        <FormattedDate date={props.weatherData.date} />
    </li>
    <li className="text-capitalize">
        {props.weatherData.description}
        </li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
                <img 
                src={props.weatherData.icon} 
                alt={props.weatherData.description}
                className="float-left"
                />
                <div className="float-left">
                <span className="temperature">
                    {Math.round(props.weatherData.temperature)}
                    </span>
                <span className="unit">°C</span>
                </div>
        </div>
        </div>
        <div className="col-6">
    <ul>
              <li>Humidity: {props.weatherData.humidity}%</li>
              <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
            </ul>
    </div>
    </div>
    </div>
);
}