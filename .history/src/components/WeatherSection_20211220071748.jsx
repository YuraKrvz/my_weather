import {useState, useEffect} from 'react';
import Weather from './Weather';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> setCurrentLocation(loc))

      console.log(currentLocation)
   }, []);

   console.log(currentLocation.coords)

   return (
      <div>
         <Weather />
      </div>
   )
}
