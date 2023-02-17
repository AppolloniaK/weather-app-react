import React from "react";
import Weather from "./Weather";
import Opensource from "./Opensource";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
       <h1>Weather App</h1>
      <Weather />
  <footer>
  This project was coded by <a href="https://idyllic-cobbler-4d0550.netlify.app/" target="_blank">Appollonia Khan</a> and is <a
        href="https://github.com/AppolloniaK/weather-app-react"
        target="_blank"
      >
        Open-sourced</a> on GutHub.
  </footer>
      </div>
      </div>
  );
}

export default App;