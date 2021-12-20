import ActionAreaCard from './ActionAreaCard';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {addCity} from '../store';

export default function Weather({lat, lon}) {
   const listCountries = useSelector(state => state.listOfCities)
   const dispatch = useDispatch();

   useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=52384db87a489d7bf7951e5f1b8ed938`)
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