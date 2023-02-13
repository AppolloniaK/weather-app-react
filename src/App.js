import React from "react";
import Weather from "./Weather";
import Opensource from "./Opensource";

import "./App.css";

function App() {
  return (
    <div className="App">
       <h1>Weather App</h1>
      <Weather />
      <Opensource />
      </div>
  );
}

export default App;