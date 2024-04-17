import Home from "../pages/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { ROUTES } from "../utils/constant";

export const routes = () => [
    {
        Component: Home,
        path: ROUTES.home
    },
    {
        Component: Login,
        path: ROUTES.login
    },
    {
        Component: Register,
        path: ROUTES.register
    }

];