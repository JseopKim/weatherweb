import React, {useEffect, useState} from 'react';
import './Current.css';

function CurrentWeather() {

  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className='Current'>
      <h1>Hello from MyComponent</h1>
    </div>
  );
}

export default CurrentWeather;