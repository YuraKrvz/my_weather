import {useState, useEffect} from 'react';

export default function Weather() {
   useEffect(()=>{
      fetch('api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
   }, [])

   return (
      <div>
         
      </div>
   )
}
