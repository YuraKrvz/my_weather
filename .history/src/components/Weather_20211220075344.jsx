import {useState, useEffect} from 'react';

export default function Weather({lat, lon}) {
   useEffect(()=>{
      fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a1ade490549bd6be5adb7320672f463`)
      .then((res)=> {
         try{
            return res.json()
         }catch(e){
            console.error(e)
         }
      })
      .then((res)=> {
         try{
            return res
         }catch(e){
            console.error(e)
         }
      })
      .catch(e => console.error(e))
      
   }, [])

   return (
      <div>
         123
      </div>
   )
}
