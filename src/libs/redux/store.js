import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "./todo-slice/todo-slice";

export const store = configureStore({
    reducer:{
        todos: todosReducer,
    }
})


export default store;