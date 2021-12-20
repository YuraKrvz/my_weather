import { createSlice, configureStore } from '@reduxjs/toolkit';

const listSlice = createSlice({
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

export const {addCity, removeCity} = listSlice.actions;

const listReducer = listSlice.reducer;

export const store = configureStore({
   reducer: listReducer.reducer
});

