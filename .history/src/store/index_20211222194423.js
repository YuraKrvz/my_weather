import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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

export const {addCity, removeCity} = listSlice.actions;


// export const store = configureStore({
//    reducer: persistedReducer,
// });

export const store = configureStore({
       reducer: persistedReducer,
       middleware: (getDefaultMiddleware) => 
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         }),
    });
export const persistor = persistStore(store);

