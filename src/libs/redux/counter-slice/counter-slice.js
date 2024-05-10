import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 10,
    numbers: []
  },
  reducers: {
    increment: (store) => {
      store.number += 1;
    },
    decrement: (store) => {
      store.number -= 1;
    },
    addNumberInArray: (store, { payload }) => {
      console.log(payload, "payload");
      store.numbers.push(payload);
    }
  }
});

export const counterActions = {
  ...counterSlice.actions
};

export const counterReducer = counterSlice.reducer;
