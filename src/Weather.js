import React, { useState } from "react";
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
          <div className="col-8">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
            </div>
        <div className="col-2">
          <button type="Submit">Search</button>
          </div>
      </div>
        </form>
      );
    
      let footer = (
        <footer className="mt-4">
          This project was coded by: {""}
          <br />
          <a
            href="https://ellacodes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabriella Corales "EllaCodes"
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EllaCodes4/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      );
      
      if (loaded) {
        return (
          <div>
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
      }
    }
    