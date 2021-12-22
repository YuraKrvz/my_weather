import { createSlice, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//


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

const persistConfig = {
   key: 'root',
   storage,
 }

export const {addCity, removeCity} = listSlice.actions;

export const store = configureStore({
   reducer: {
      listOfCities: listSlice.reducer,
   },
});

