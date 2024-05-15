import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo-slice/todo-slice";
import { todoSliceName } from "./todo-slice/actions";

export default configureStore({
  reducer: {
    [todoSliceName]: todoReducer
  }
});