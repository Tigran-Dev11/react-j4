import Contact from "../pages/contact";
import Products from "../pages/products";
import Weddings from "../pages/weddings";
import Service from "../pages/service";
import Shop from "../pages/shop";
import Home from "../pages/home";
import { ROUTES } from "../utils/constants"

export const routes = [
  {
    component: Home,
    path: ROUTES.home,
  },
  {
    component: Contact,
    path: ROUTES.contact,
  },
  {
    component: Shop,
    path: ROUTES.shop,
  },
  {
    component: Weddings,
    path: ROUTES.weddings,
  },
  {
    component: Products,
    path: ROUTES.products,
  },
  {
    component: Service,
    path: ROUTES.service,
  },
  {
    component: Home,
    path: ROUTES.home,
  },
 
];