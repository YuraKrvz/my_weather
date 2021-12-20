import { createSlice, configureStore } from '@reduxjs/toolkit';

const listOfCities = createSlice({
   name: 'listOfCities',
   initialState: [],
},
   reducers: {
      addCity: (state, payload) => {
         state.push(payload)
      },
      
   }
)