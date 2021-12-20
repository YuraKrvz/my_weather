export const API_KEY = '52384db87a489d7bf7951e5f1b8ed938';

export const GetCurrentPosition = () => navigator.geolocation.getCurrentPosition(location => location);
export const CurrentCountryByCoordinates = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`; 
export const CurrentCountryByName = (name) => `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;