import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Home from "../pages/home";
import Products from "../pages/products";
import { ROUTES } from "../util/constant";



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
    }
    
  ];
 