import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { todoSliceName } from "./actions";
import { getTodos } from "./actions";

const todoSlice = createSlice({
  name: todoSliceName,
  initialState: {
    todos: [],
    todoValue: ""
  },
  reducers: {
    onChangeInput: (state, { payload }) => {
      state.todoValue = payload;
    },

    deleteTodo: (state, { payload }) => {
      const data = state.todos.filter((todo)=> todo.id !== payload)
      state.todos = data
    },
    acceptedTodo: (state, { payload }) => {
      if (state.checked) {
        console.log("asldo");
      }
    },
    editTodo: (state) => {},
    addNewTodo: (state) => {
      if (state.todoValue) {
        let newTodoItem = {
          title: state.todoValue,
          completed: false,
          id: uuid()
        };

        state.todos = [newTodoItem, ...state.todos];
        state.todoValue = "";
      }
    }
  }
});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
  ...todoSlice.actions,
  getTodos
};
