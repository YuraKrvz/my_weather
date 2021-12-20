import { createSlice, configureStore } from '@reduxjs/toolkit';

const listOfCities = createSlice({
   name: 'listOfCities',
   initialState: [],
   },
   reducers: {
      addCity: (state, payload) => {
         state.push(payload)
      },
      removeCity: (state, payload) => {
         state.push(payload)
      }
});

export const {addCity, removeCity} = = listOfCities.actions;

export const store = configureStore({
   reducer: listOfCities.reducer
});

