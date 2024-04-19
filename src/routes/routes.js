import Login from "../pages/login/login"
import Register from "../pages/register/register"
import Home from "../pages/home/home"
import { ROUTES } from "../utils/constants";


export const routes = [
    {
        component:Home,
        path:ROUTES.home
    },
    {
        component:Login,
        path:ROUTES.login
    },
    {
        component:Register,
        path:ROUTES.register
    }
];