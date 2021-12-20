export const API_KEY = '52384db87a489d7bf7951e5f1b8ed938';

const CurrentWeatherByName = (name) => `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;