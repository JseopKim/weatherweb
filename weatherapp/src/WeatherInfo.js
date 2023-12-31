const express = require('express');
const app = express();
const port = 3000; // 원하는 포트로 설정
const current = new Date();

let year = current.getFullYear();
//! getMonth()는 0-11을 출력, 2자리로 설정
let month = (current.getMonth() + 1).toString().padStart(2, '0');
let date = current.getDate().toString().padStart(2, '0');
let fullDate = `${year}${month}${date}`;

let currentHour = current.getHours().toString().padStart(2, '0');
let currentMinute = current.getMinutes().toString().padStart(2, '0');
let fullTime = `${currentHour}${currentMinute}`
console.log(fullDate);
console.log(fullTime);

// 미들웨어 설정 (CORS 처리 등)
app.use(express.json());
let weatherData;
let temeperatureObject;

// API 엔드포인트
app.get('/api/weather', (req, res) => {
  fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=YZoS%2BsXeAepKP3LboIXQqhWlKoX9QnyqON1fEs1rtqgf1P5HWoO6IIAxAEL5gI6OSmXgxfMxA%2F5dumJSW2IeHg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${fullDate}&base_time=${fullTime}&nx=55&ny=127`)
    .then((response) => response.json())
    .then((data) => {
      // API 응답 데이터를 클라이언트에게 반환합니다.
      weatherData = data.response.body.items.item;
      temeperatureObject = weatherData.filter((kind) => kind.category === 'T1H');
      // res.json(data);
      res.json({ weatherData, temeperatureObject });

      // console.log(temeperatureObject);
      // console.log(fullDate);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
