import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=907e8f79461621c050287ec0665404a7`)
      .then((res)=> res.json())
      .then((res)=> res)
      .catch(e => console.error(e))
      
   }, [])

   return (
      <div>
         123
      </div>
   )
}
