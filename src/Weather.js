import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
    
    function displayWeather(response) {
        setLoaded(true);
        setWeather({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "50cfd6595523a7f69104e698dea7cff4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
      }
    
      function updateCity(event) {
        setCity(event.target.value);
      }
    
      let form = (
        <form onSubmit={handleSubmit}>
               <div className="row">
                <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onChange={updateCity}
          />
          </div>
          <div className="col-3"></div>
          <input type="submit" value="Search" className="btn btn-primary" />
          </div> 
          </form>
      );

      if (loaded) {
        return (
            <div className="Weather">
            <h2>Welcome to Weather!</h2>
            {form}
            <ul>
              <li>Temperature {Math.round(weather.temperature)}°C</li>
              <li>Humidity {weather.humidity}%</li>
              <li>Wind {Math.round(weather.wind)} km/h</li>
              <li>
                <img src={weather.icon} alt="Weather Icon" />
              </li>
            </ul>
          </div>
        );
      } else {
        return form;
      };
    }
    
