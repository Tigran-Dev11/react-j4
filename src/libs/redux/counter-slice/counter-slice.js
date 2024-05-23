import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({

    name: "counter",
    initialState: {
        number: 1,
        numbers: []
    },

    reducers: {
        increment: (store) => {
            store.number += 1;
        },

        decrement: (store) => {
            store.number -= 1;
        },

    }
});


export const counterActions = {
    ...counterSlice.actions
};

export const counterReducer = counterSlice.reducer;