import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Home from "../pages/home";
import Products from "../pages/products";
import Register from "../pages/register";
import Login from "../pages/login";

import { ROUTES } from "../utils/constant";



export const routes = [
    {
      component: Home,
      path: ROUTES.home
    },
    {
      component: Products,
      path: ROUTES.products
    },
    {
      component: AboutUs,
      path: ROUTES.aboutUs
    },
    {
      component: ContactUs,
      path: ROUTES.contactUs
    },
    {
        component: Register,
        path: ROUTES.register
      },
      {
        component: Login,
        path: ROUTES.login
      }
    
  ];
 