import {useState, useEffect} from 'react';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> setCurrentLocation(loc))
   }, [])

   return (
      <div>
      WeatherSection
      </div>
   )
}
