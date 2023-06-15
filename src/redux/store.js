import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './slices/contactsSlice';
import { filterSlice } from './slices/filterSlice';
import storage from 'redux-persist/lib/storage';
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

const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
