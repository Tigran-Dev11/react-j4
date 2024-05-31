import { createSlice } from "@reduxjs/toolkit";
import { getProduct, productSliceName } from "./actions";
import { FETCH_STATUS } from "../../utils/constants";

const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    products: [],
    getProductStatus: FETCH_STATUS.IDLE,
    basketItems: [],
  },

  reducers:{

    getBasketDataByStorage: (state) => {
      const basketItems = JSON.parse(localStorage.getItem("basketItems"));
      if (basketItems && basketItems?.length) {
        state.basketItems = basketItems;
      }
    },


  addBasket: (state, { payload }) => {
    if (!state.basketItems.length) {
      state.basketItems.push(payload);
    } else {
      const findItem = state.basketItems.find(
        (item) => item.id === payload.id
      );

      if (!findItem) {
        state.basketItems.push(payload);
      } else {
        state.basketItems = state.basketItems.map((item) => {
          if (item.id === findItem.id) {
            return {
              ...item,
              count: item.count + payload.count,
              id: item.id + payload.id,
              title: item.title + payload.id
            };
          }
          return item;
        });
      }
    }
    localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
  },
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
