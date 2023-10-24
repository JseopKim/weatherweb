import './App.css';
import React from 'react';
import CurrentWeather from './Current';

function App() {
  return (
    <div className="App">
      <div className="App-back">
        <CurrentWeather />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
