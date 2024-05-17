import AboutUs from "../pages/about-us"
import Home from "../pages/home";
import { ROUTES } from "../utils/constants"

export const routes = [
  {
    component: Home,
    path: ROUTES.home,
  },
  {
    component: AboutUs,
    path: ROUTES.aboutUs,
  },
 
];