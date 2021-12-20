import { createSlice, configureStore } from '@reduxjs/toolkit';

const listOfCities = createSlice({
   name: 'listOfCities',
   initialState: [],
   },
   reducers: {
      addCity: (state) => {
         state.push([])
      },
      removeCity: (state) => {
         state.push([])
      }
   });

export const {addCity, removeCity} = = listOfCities.actions;

export const store = configureStore({
   reducer: listOfCities.reducer
});

