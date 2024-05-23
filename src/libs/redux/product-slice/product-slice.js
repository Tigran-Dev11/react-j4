import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../../utils/constant";
import { getProducts, productSliceName } from "./actions";

const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    products: [],
    getProductsStatus: FETCH_STATUS.IDLE
  },

  reducers: {
      addBasket: (state) =>{
        const basketItem ={
          id:state.id,
          name:state.name,
          img:state.img,
          number
        };
        state.push(basketItem);
      }
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProductsStatus = FETCH_STATUS.PANDING;
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.getProductsStatus = FETCH_STATUS.SUCCESS;
        state.products = payload;
      });
    builder.addCase(getProducts.rejected, (state) => {
      state.getProductsStatus = FETCH_STATUS.REJECTED;
    });
  }
});

export const productReducer = productSlice.reducer;

export const productActions = {
  ...productSlice.actions,
  getProducts
};
