import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed,
    city: response.data.name,
});
    }

    function handleSubmit(event) {
        event.preventDefault();
        //search for a city
    }

    if (weatherData.ready) {
   return (
    <div className="Weather">
        <form onSubmit={handleSUbmit}>     
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
             <WeatherInfo data={weatherData} />
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
