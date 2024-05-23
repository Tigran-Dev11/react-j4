import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product-slice/product-slice";
import { productSliceName } from "./product-slice/actions";
import { counterReducer } from "./counter-slice/counter-slice";




export default configureStore({

    reducer: {
        [productSliceName]: productReducer,
        counter: counterReducer
    }
});