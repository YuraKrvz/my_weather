import {useState, useEffect} from 'react';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((loc)=> setCurrentLocation(loc))

      console.log(currentLocation)
   }, []);

   console.log(currentLocation)

   return (
      <div>
         <Weather lat={currentLocation.coords.latitude} lon={currentLocation}/>
      </div>
   )
}
