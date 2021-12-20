import { createSlice, configureStore } from '@reduxjs/toolkit';

const listOfCities = createSlice({
   name: 'listOfCities',
   initialState: [],
   reducers: {
      addCity: (state, action) => {
         state.listOfCities.push(action)
      },
      removeCity: (state, action) => {
         // state.push(action)
      }
   }
})

export const {addCity, removeCity} = listOfCities.actions;

export const store = configureStore({
   reducer: listOfCities.reducer
});

