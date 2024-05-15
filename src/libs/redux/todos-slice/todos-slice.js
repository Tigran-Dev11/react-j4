import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import EditTask from "../../../components/todo-edit";

export const TodosSlice = createSlice({
  name: "Todolist",
  initialState: {
    todos: [
      {
        title: "Go Shopping",
        id: uuid(),
        completed: false,
        edit: false
      },
      {
        title: "Go to Schooll",
        id: uuid(),
        completed: false,
        edit: false
      },
      {
        title: "Go to Club",
        id: uuid(),
        completed: false,
        edit: false
      }
    ],
    todo: {},
    todoValue: ""
  },
  reducers: {
    addTodo: (state) => {
      if (state.todoValue) {
        let newTodo = {
          title: state.todoValue,
          id: uuid(),
          completed: false,
          edit: false
        };
        state.todos = [newTodo, ...state.todos];
        state.todoValue = "";
      }
    },

    deleteTodo: (state, { payload }) => {
      const filtered = state.todos.filter((item) => item.id != payload);
      state.todos = filtered;
    },
    changeValue: (state, { payload }) => {
      state.todoValue = payload;
    },

    changeCompleted: (state, { payload }) => {
      state.todos.find((item) => {
        if (item.id === payload) {
          item.completed = !item.completed;
        }
      });
    },
    editTodo: (state, { payload }) => {
      const editedTodo = state.todos.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            edit: true
          };
        }

        return item;
      });

      state.todos = editedTodo;

      const editedTodoItem = state.todos.find((item) => item.id === payload);
      state.todo = editedTodoItem;
      state.todoValue = editedTodoItem?.title;
    }
  }
});

export const todoActions = {
  ...TodosSlice.actions
};

export const todosReducer = TodosSlice.reducer;
