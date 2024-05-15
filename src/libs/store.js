import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./redux/todo-slice/todo-slice";


export default configureStore({
    reducer: {
        todos: todoReducer,
    }
});