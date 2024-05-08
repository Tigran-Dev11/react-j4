import { IsAuth } from "../hoc/is-auth";
import Counter from "../pages/counter";
import Home from "../pages/home";
import Profile from "../pages/profile";
import { ROUTES } from "../utils/constants";

export const routes = [
  {
    component: Home,
    path: ROUTES.home
  },
  {
    component: Counter,
    path: ROUTES.counter
  },
  {
    component: IsAuth(Profile),
    path: ROUTES.profile
  }
];
