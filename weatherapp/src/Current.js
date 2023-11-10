import React, { useEffect, useState } from 'react';
import './Current.css';

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // API 요청을 보내어 서버로부터 데이터 가져오기
    fetch('/api/weather') // API 엔드포인트로 설정
      .then((response) => response.json())
      .then((data) => {
        // API로부터 받은 데이터를 상태로 설정
        // setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className='Current'>
      <h1>Hello from MyComponent</h1>
    </div>
  );
}

export default CurrentWeather;