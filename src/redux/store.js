import { configureStore } from "@reduxjs/toolkit";
import { productSliceName } from "./product-slice/action";
import { productReducer } from "./product-slice/product-slice";

export default configureStore({
  reducer: {
products:productReducer
  }
});