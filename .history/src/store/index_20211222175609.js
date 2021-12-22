import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

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

export const {addCity, removeCity} = listSlice.actions;

export const persistor = persistStore(store);
export const store = configureStore({
   reducer: persistedReducer,
});
// REDUX-PERSISTS
const persistConfig = {
   key: 'root',
   storage,
 }

 const rootReducer = combineReducers({
   reducer: {
      listOfCities: listSlice.reducer,
   },
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

