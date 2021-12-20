import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52,520007=${lon}=52384db87a489d7bf7951e5f1b8ed938`)
      .then((res)=> res.json())
      .then((res)=> console.log(res))
      
   }, [])

   return (
      <div>
         123
      </div>
   )
}
