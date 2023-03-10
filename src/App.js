import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <h1>Weather App</h1>
      <Weather defaultCity="New York" />
  <footer>
  This project was coded by 
  <a href="https://idyllic-cobbler-4d0550.netlify.app/" 
  target="_blank" 
  rel="noopener noreferrer">
    Appollonia Khan
    </a> 
  and is 
  <a href="https://github.com/AppolloniaK/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-sourced on GutHub
        </a>.
  </footer>
      </div>
      </div>
  );
}

