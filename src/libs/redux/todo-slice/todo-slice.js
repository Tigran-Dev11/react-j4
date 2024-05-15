import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [
            {
                id: Math.random(),
                title: "Learn HTML",
                completed: false
            },
            {
                id: Math.random(),
                title: "Learn CSS",
                completed: false
            },
            {
                id: Math.random(),
                title: "Learn JS",
                completed: false
            }
            ,
            {
                id: Math.random(),
                title: "React",
                completed: false
            }
        ],
        todo: [],
        todoValue: "",
    },

    reducers: {
        onChangeInput: (state, { payload }) => {
            state.todoValue = payload;
        },

        addTodo: (state) => {
            if (state.todoValue) {
                const newTodo = {
                    id: Math.random(),
                    title: state.todoValue,
                    completed: false
                };

                state.todos = [newTodo, ...state.todos];
                state.todoValue = "";
            }
        },

        deleteTodo: (state, action) => {
            const filtredTodos = state.todos.filter(
                (todo) => todo.id === action.payload
            );
            state.todos.splice(filtredTodos, 1);
        },

        isCompleted: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },

        editTodo: (state, action) => {

            {
                const { id, newTitle } = action.payload;
                state.todos = state.todos.map((todo) =>
                    todo.id === id ? { ...todos, title: newTitle } : todos
                );
            }
        }
    }


});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
    ...todoSlice.actions,

}