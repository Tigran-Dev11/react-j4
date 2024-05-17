import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice';
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,
    booking: bookingReducer,
  },
});
