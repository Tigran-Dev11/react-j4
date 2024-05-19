import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.list.push(action.payload);
    },
    removeCar: (state, action) => {
      state.list = state.list.filter(car => car.id !== action.payload);
    },
  },
});

export const { addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
