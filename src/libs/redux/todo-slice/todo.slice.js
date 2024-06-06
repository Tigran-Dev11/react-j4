import { createSlice } from "@reduxjs/toolkit";
import { todoSliceName } from "./actions";

const todoSlice = createSlice({
  name: todoSliceName,
  initialState: {
    todos: [],
    todo: [],
    todoValue: "",
    completed:false
  },
  reducers: {
    onchangeInput: (state, { payload }) => {
      state.todoValue = payload;
    },
    isCompleted: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
  },
    addTodo: (state) => {
      if (state.todoValue) {
        const newTodo = {
          id: Math.floor(Math.random() * 1000),
          title: state.todoValue,
          completed:false,
        };

        (state.todos = [newTodo, ...state.todos]), (state.todoValue = "");
      }
    },
    deleteTodo: (state, { payload }) => {
      const filteredTodos = state.todos.filter((todo) => todo.id === payload);
      state.todos.splice(filteredTodos, 1);
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
  ...todoSlice.actions,
};
