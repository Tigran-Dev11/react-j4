import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice/counter-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
