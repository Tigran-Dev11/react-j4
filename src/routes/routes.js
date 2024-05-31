import { ROUTES } from "../utils/constant";
import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";
import About from "../pages/about/about";
import Login from "../pages/login/login";
import SignUp from "../pages/sign-up/sign-up";
import Basket from "../pages/basket/basket";

export const routes = [
  {
    component: Home,
    path: ROUTES.home,
  },
  {
    component: Shop,
    path: ROUTES.shop,
  },
  {
    component: About,
    path: ROUTES.about,
  },
  {
    component: Login,
    path: ROUTES.login,
  },
  {
    component: SignUp,
    path: ROUTES.signUp,
  },
  {
    component: Basket,
    path: ROUTES.basket,
  },
];
