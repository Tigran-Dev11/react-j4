import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/cars');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
