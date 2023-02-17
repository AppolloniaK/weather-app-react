import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
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
          <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div> 
          </div>
          </form>     
<h1>New York</h1>
<ul>
    <li>Wednesday 07:00</li>
    <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
                <img src={weather.icon} alt="Weather Icon" />°6
        </div>
    <ul>
              <li>Temperature {Math.round(weather.temperature)}°C</li>
              <li>Humidity {weather.humidity}%</li>
              <li>Wind {Math.round(weather.wind)} km/h</li>
            </ul>
    </div>
    </div>
   );
    }
    
