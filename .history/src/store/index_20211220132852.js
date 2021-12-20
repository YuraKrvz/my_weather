import { createSlice, configureStore } from '@reduxjs/toolkit';

const listOfCitiesSlice = createSlice({
   name: 'listOfCities',
   initialState: [],
   reducers: {
      addCity: (state, action) => {
         console.log(action);
         state.listOfCities.push(action.payload)
      },
      removeCity: (state, action) => {
         state.push(action)
      }
   }
})

export const {addCity, removeCity} = listOfCitiesSlice.actions;

export const store = configureStore({
   reducer: listOfCities.reducer
});

