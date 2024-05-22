import { createSlice } from "@reduxjs/toolkit";
import { getProduct, productSliceName } from "./actions";
import { FETCH_STATUS } from "../../utils/constants";

const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    products: [],
    getProductStatus: FETCH_STATUS.IDLE
  },

  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.getProductStatus = FETCH_STATUS.PANDING;
    }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.getProductStatus = FETCH_STATUS.SUCCESS;
        state.products = payload;
      });
    builder.addCase(getProduct.rejected, (state) => {
      state.getProductStatus = FETCH_STATUS.REJECTED;
    });
  }
});

export const productReducer = productSlice.reducer;

export const productActions = {
  ...productSlice.actions,
  getProduct
};
