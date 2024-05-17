// bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.allBookings.push(action.payload);
    },
    cancelBooking: (state, action) => {
      state.allBookings = state.allBookings.filter(booking => booking.id !== action.payload);
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
