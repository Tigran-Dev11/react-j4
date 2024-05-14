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
        ],

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

        

    }


});

export const todoReducer = todoSlice.reducer;

export const todoActions = {
    ...todoSlice.actions,

}
