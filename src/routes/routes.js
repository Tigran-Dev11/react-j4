
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Products from "../pages/products";
import UserPage from "../pages/userpage";
import Basket from"../pages/basket";
import Order from "../pages/order";
import { ROUTES } from "../utils/constant";

export const routes = [
    {
        component: Home,
        path: ROUTES.home
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
        component: Products,
        path: ROUTES.products
    },
    {
        component: UserPage,
        path: ROUTES.userpage
    },
    {
        component: Basket,
        path: ROUTES.basket
    },
    {
        component: Order,
        path: ROUTES.order
    }


];