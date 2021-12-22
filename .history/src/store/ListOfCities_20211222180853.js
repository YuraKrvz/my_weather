import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
   name: 'listOfCities',
   initialState: {
      listOfCities: [],
   },
   reducers: {
      addCity: (state, action) => {
         state.listOfCities.push(action.payload)
      },
      removeCity: (state, action) => {
         state.listOfCities = state.listOfCities.filter(state => state.id !== action.payload);
      }
   }
})

export const {addCity, removeCity} = listSlice.actions;