import { createSlice } from "@reduxjs/toolkit";
import { isUUID } from "uuid-v4";



const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        todoValue: "",
    },

    reducers: {
        onChangeInput: (state, { payload }) => {
            state.todoValue = payload;
        },

        addTodo: (state) => {
            if (state.todoValue) {
                const newTodo = {
                    id: isUUID(),
                    title: state.todoValue,
                    completed: false

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

}
