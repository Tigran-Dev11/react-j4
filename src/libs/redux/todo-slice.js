import { createSlice } from "@reduxjs/toolkit";
import { todoSliceName } from "./actions";

const todoSlice = createSlice({
  name: todoSliceName,
  initialState: {
    todos: [],
    todoValue: "",
  },
  reducer: {
    onChange: (state, { payload }) => {
      state.todoValue = payload;
    },
    onSubmit: (state) => {
      const newTodo = {
        id: Math.random(),
        title: state.todoValue,
        completed: false,
      };
      state.todos = [newTodo, ...state.todos];
      state.todoValue = "";
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    isCompleted: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].completed = payload.completed;
    },
    updateTodo: (state, {payload}) =>{
      const {id, newTitle} = payload,
      state.todos.map ()
    }
  },
});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
  ...todoSlice.actions,
};
