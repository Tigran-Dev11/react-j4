import { createAsyncThunk } from "@reduxjs/toolkit";
import { productServices } from "./services";


export const productSliceName = "product";

export const getProduct = createAsyncThunk(
  `${productSliceName}/getProduct`,
  async (body, { rejectWithValue }) => {
    try {
      const response = await productServices.getProduct();


      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);