import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo-slice/todo-slice";


export default configureStore({
    reducer: {
        todos: todoReducer,
    }
});