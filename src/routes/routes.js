import Basket from "../pages/basket-page";
import Home from "../pages/home";
import Login from "../pages/register-login/login";
import Register from "../pages/register-login/register";
import { ROUTES } from "../utils/constants";

const routes = [
  {
    id: 1,
    component: Home,
    path: ROUTES.home,
  },
  {
    id: 2,
    component: Basket,
    path: ROUTES.basket,
  },
  {
    id: 3,
    component: Login,
    path: ROUTES.login,
  },
  {
    id: 4,
    component: Register,
    path: ROUTES.register,
  },
];

export default routes;
