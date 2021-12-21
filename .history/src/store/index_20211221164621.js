import { createSlice, configureStore } from '@reduxjs/toolkit';

const listSlice = createSlice({
   name: 'listOfCities',
   initialState: [],
   reducers: {
      addCity: (state, action) => {
         state.push(action.payload)
      },
      removeCity: (state, action) => {
         // state.push(action)
         console.log(state.initialState)
         console.log(action.payload.id)
         // state.listOfCities = state.listOfCities.filter(state => state.id !== action.payload);
      }
   }
})

export const {addCity, removeCity} = listSlice.actions;

export const store = configureStore({
   reducer: {
      listOfCities: listSlice.reducer,
   },
});

