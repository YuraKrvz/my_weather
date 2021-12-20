import ActionAreaCard from './ActionAreaCard';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import {addCity} from '../store';

export default function Weather({lat, lon}) {
   const [weather, setWeather] = useState();
   const listCountries = useSelector(state => state.listOfCities)
   // console.log(listCountries)
   const dispatch = useDispatch();
   // const addCityTolist = ;

   useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=52384db87a489d7bf7951e5f1b8ed938`)
      .then((res)=> res.json())
      .then((res)=> {
         console.log(res)
         setWeather(res)
      })
      
   }, [])

   // console.log(weather)
   return (
      <div style={{display: 'flex'}}>
         <button onClick={()=> dispatch(addCity({name: 'Odessa'}))}></button>
         {listCountries.map((item)=> <p>{item.name}</p>)}

         {weather 
            && 
            (<ActionAreaCard country={weather.sys.country} name={weather.name} icon={weather.weather[0].icon} main={weather.main} />)
         }
         {

         }
      </div>
   )
}