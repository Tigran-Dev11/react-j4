import { configureStore } from "@reduxjs/toolkit";
import { productSliceName } from "./product-slice/actions";
import { productReducer } from "./product-slice/product-slice";

export default configureStore({
  reducer: {
    [productSliceName]: productReducer
  }
});
