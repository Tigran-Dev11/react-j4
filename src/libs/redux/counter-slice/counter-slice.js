import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    products:[],
    loading:false
  },
  reducers: {
    setProducts:()=>{}
  }
});

export const counterActions = {
  ...counterSlice.actions
};

export const counterReducer = counterSlice.reducer;
