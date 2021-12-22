import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import listOfCities from './listOfCities';

const rootReducer = combineReducers({
   listOfCities: listOfCities,
});

const persistConfig = {
   key: 'root',
   storage,
 };

 const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         }
      })
 })
