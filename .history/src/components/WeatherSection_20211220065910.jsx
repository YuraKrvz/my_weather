import {useState, useEffect} from 'react';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> setCurrentLocation(loc))

      console.log(currentLocation)
   }, [])

   return (
      <div>
      WeatherSection
      </div>
   )
}
