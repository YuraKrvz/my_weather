import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a1ade490549bd6be5adb7320672f463`)
      .then((res)=> res.json())
      .then((res)=> console.log(res))
      .catch(e){
         console.log(e)
      }
   }, [])

   return (
      <div>
         123
      </div>
   )
}
