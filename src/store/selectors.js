import { createSelector } from 'reselect';

const selectCarsState = (state) => state.cars;

export const selectAllCars = createSelector(
  [selectCarsState],
  (carsState) => carsState.list
);

export const selectCarById = (carId) => createSelector(
  [selectAllCars],
  (cars) => cars.find(car => car.id === carId)
);
