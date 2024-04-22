
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Products from "../pages/products";
import UserPage from "../pages/userpage";
import { ROUTES } from "../utils/conctant";

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
    }


];