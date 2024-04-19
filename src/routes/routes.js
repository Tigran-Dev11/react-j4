
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
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


];