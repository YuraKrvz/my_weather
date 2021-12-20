import {useState, useEffect} from 'react';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> console.log(loc))
   }, [])

   return (
      <div>
      WeatherSection
      </div>
   )
}
