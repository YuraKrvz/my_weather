import {useState, useEffect} from 'react';
import Weather from './Weather';

import { GetCurrentPosition } from '../config';

export default function WeatherSection() {
   const [currentLocation, setCurrentLocation] = useState(null);

   useEffect(()=>{
      setCurrentLocation( GetCurrentPosition() )

      // console.log(currentLocation)
   }, []);

   // console.log(currentLocation)

   return (
      <div>
         {currentLocation && <Weather lat={currentLocation.coords.latitude} lon={currentLocation.coords.longitude} />}
      </div>
   )
}
