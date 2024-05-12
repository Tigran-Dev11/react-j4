import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todo-slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});

export default store;
