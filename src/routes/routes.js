import Login from "../pages/login";
import Register from "../pages/register";
import { ROUTES } from "../utils/constant";

export const routes = [
  {
    Component: Login,
    path: ROUTES.login,
  },
  {
    Component: Register,
    path: ROUTES.register,
  }
];

