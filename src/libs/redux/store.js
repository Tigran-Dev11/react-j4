import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./counter-slice/counter-slice";

const store = configureStore({
  reducer: {
    counter: todoSlice
  }
});

export default store;


