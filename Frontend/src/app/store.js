import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import storeSlice from '../features/storeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    store: storeSlice
  },
});
