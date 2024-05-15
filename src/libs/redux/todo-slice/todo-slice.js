import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getTodos, todoSliceName } from "./actions";
import { FETCH_STATUS } from "../../../utils/constants";

const todoSlice = createSlice({
  name: todoSliceName,
  initialState: {
    todos: [],
    todoValue: "",
    getTodosStatus: FETCH_STATUS.IDLE
  },
  reducers: {
    onChangeInput: (state, { payload }) => {
      state.todoValue = payload;
    },

    isCompleted: (state, action) => {
    const index = state.findIndex((todo) => todo.id === action.payload.id);
    state[index].completed = action.payload.completed;
    },

    editTodo: (state) => {},

    deleteTodo: (state) => {},

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
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.getTodosStatus = FETCH_STATUS.PANDING;
    }),
      builder.addCase(getTodos.fulfilled, (state, { payload }) => {
        state.getTodosStatus = FETCH_STATUS.SUCCESS;
        state.todos = payload;
      });
    builder.addCase(getTodos.rejected, (state) => {
      state.getTodosStatus = FETCH_STATUS.REJECTED;
    });

  }
});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
  ...todoSlice.actions,
  getTodos
};