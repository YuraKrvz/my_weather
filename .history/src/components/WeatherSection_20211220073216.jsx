import {useState, useEffect} from 'react';
import Weather from './Weather';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState();

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> setCurrentLocation(loc))

      console.log(currentLocation)
   }, []);

   console.log(currentLocation)

   return (
      <div>
         {currentLocation && <Weather lat={currentLocation.coords.latitude} lon={currentLocation.coords.longitude} />}
      </div>
   )
}
