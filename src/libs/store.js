import { configureStore } from "@reduxjs/toolkit";
import { todoSliceName } from "./redux/todo-slice/actions";
import { todoReducer } from "./redux/todo-slice/todo-slice";



export default configureStore({
    reducer:{
      [todoSliceName] : todoReducer
    }
})