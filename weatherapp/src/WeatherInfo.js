const express = require('express');
const app = express();
const port = 3001; // 원하는 포트로 설정
const currentTime = new Date();
const options = {hour: '2-digit', minute: '2-digit', second: '2-digit'};

const formattedTime = `${currentTime.toLocaleTimeString('kr-KR', options)}`;

console.log(formattedTime);

// 미들웨어 설정 (CORS 처리 등)
app.use(express.json());
let weatherData;
let temeperatureObject;

// API 엔드포인트ß
app.get('/api/weather', (req, res) => {
  fetch('https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=YZoS%2BsXeAepKP3LboIXQqhWlKoX9QnyqON1fEs1rtqgf1P5HWoO6IIAxAEL5gI6OSmXgxfMxA%2F5dumJSW2IeHg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20231031&base_time=0000&nx=55&ny=127')
    .then((response) => response.json())
    .then((data) => {
      // API 응답 데이터를 클라이언트에게 반환합니다.
      weatherData = data.response.body.items.item;
      temeperatureObject = weatherData.filter((kind) => kind.category === 'T1H');
      res.json(data);

      console.log(temeperatureObject);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
