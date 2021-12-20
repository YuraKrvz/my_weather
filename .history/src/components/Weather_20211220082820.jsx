import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}=${lon}=9a1ade490549bd6be5adb7320672f463`)
      .then((res)=> res.json())
      .then((res)=> console.log(res))
      
   }, [])

   return (
      <div>
         123
      </div>
   )
}
