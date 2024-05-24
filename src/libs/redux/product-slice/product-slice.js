import { createSlice } from "@reduxjs/toolkit";
import { getProducts, productSliceName } from "./actions";
import { productServices } from "./services";

const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    products: [],
  },

  reducers: {
    getProducts: () =>
      createAsyncThunk(async (body, { rejectWithValue }) => {
        try {
          const response = await productServices.getProducts();

          return response;
        } catch (error) {
          rejectWithValue(error);
        }
      }),
  },
});

export const productReducer = productSlice.reducer;

export const productActions = {
  ...productSlice.actions,
  getProducts
}
