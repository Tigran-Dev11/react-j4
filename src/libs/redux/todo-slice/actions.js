import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoServices } from "./services";

export const todoSliceName = "todos";


export const getTodos = createAsyncThunk(
    `${todoSliceName}/getTodos`,

    async (body,{rejectWithValue}) => {
        try {
            const response = await todoServices.getTodos()
            return response.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)