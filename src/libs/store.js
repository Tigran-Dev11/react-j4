import { configureStore } from "@reduxjs/toolkit";
import { todoSliceName } from "./redux/actions";
import { todoReducer } from "./redux/todo-slice";

export const store = configureStore({
  reducer: {
    [todoSliceName]: todoReducer,
  },
});
