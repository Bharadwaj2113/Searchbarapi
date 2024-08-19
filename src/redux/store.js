import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    character: characterReducer,
    auth: authReducer,
  },
});

export default store;
