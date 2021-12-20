import ActionAreaCard from './ActionAreaCard';
import {useEffect} from 'react';
import {API_KEY, CurrentCountryByCoordinates} from '../config';
import { useSelector, useDispatch} from 'react-redux';
import {addCity} from '../store';

export default function Weather({lat, lon}) {
   const listCountries = useSelector(state => state.listOfCities)
   const dispatch = useDispatch();

   useEffect(()=>{
      fetch(CurrentCountryByCoordinates(lat, lon))
      .then((res)=> res.json())
      .then((res)=> dispatch(addCity(res)))
   }, [])

   return (
      <div style={{display: 'flex'}}>
         {
            listCountries.map(country => (
               <ActionAreaCard 
                  country={country.sys.country} 
                  name={country.name} 
                  icon={country.weather[0].icon} 
                  main={country.main} 
                  key={country.name}
               />
            ))
         }
      </div>
   )
}