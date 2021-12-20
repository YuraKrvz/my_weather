import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127758&appid=907e8f79461621c050287ec0665404a7`, {
         headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
      })
      .then((res)=> res.json())
      .then((res)=> console.log(res))
      
   }, [])

   return (
      <div>
         123
      </div>
   )
}
