import Basket from "../pages/basket";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import Login from "../pages/login";
import Products from "../pages/products";
import Register from "../pages/register";
import { ROUTES } from "../utils/constants";

export const routes = [
  {
    component: Home,
    path: ROUTES.home
  },
  {
    component: Products,
    path: ROUTES.products
  },
  {
    component: Login,
    path: ROUTES.login
  },
  {
    component: Register,
    path: ROUTES.register
  },
  {
    component: ContactUs,
    path: ROUTES.contactUs
  },
  {
    component: Basket,
    path: ROUTES.basket
  }
];
