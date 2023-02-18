import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
console.log(response.data);
setWeatherData({
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed,
    city: response.data.name
});

setReady(true);
    }

    if (ready) {
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
          <input type="submit" 
          value="Search" 
          className="btn btn-primary w-100" 
          />
          </div> 
          </div>
          </form>     
<h1>{weatherData.city}</h1>
<ul>
    <li>Wednesday 07:00</li>
    <li>{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
                <img src={weatherData.icon} 
                alt={weatherData.description}
                className="float-left"
                />
                <div className="float-left">
                <span className="temperature">
                    {Math.round(weatherData.temperature)}
                    </span>
                <span className="unit">°C</span>
                </div>
        </div>
        </div>
        <div className="col-6">
    <ul>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
    </div>
    </div>
    </div>
   );
    } else {
        const apiKey = "50cfd6595523a7f69104e698dea7cff4";
        let city="New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;    
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}
