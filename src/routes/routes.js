import Basket from "../pages/basket";
import Products from "../pages/products";
import { ROUTES } from "../utils/constants";

export const routes = [

 
  {
    component: Products,
    path: ROUTES.products
  },
  {
    component: Basket,
    path: ROUTES.basket
  }
];