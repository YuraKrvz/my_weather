import ActionAreaCard from './ActionAreaCard';
import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   const [weather, setWeather] = useState();

   useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=52384db87a489d7bf7951e5f1b8ed938`)
      .then((res)=> res.json())
      .then((res)=> setWeather(res))
      
   }, [])

   console.log(weather.coords.weather[0].icon)
   return (
      <>
         {weather && (<ActionAreaCard >
            {123}
         </ActionAreaCard>)}
      </>
   )
}
