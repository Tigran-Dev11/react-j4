import { createSlice } from "@reduxjs/toolkit";
import { getProducts, productSliceName } from "./actions";
import { productServices } from "./services";
const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    loading: "idle",
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = "panding";
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = "success";
        state.products = payload;
      }),
      builder.addCase(getProducts.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});
export const productReducer = productSlice.reducer;
export const productActions = {
  ...productSlice.actions,
  getProducts,
};