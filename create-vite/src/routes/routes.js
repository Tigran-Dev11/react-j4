import Home from "../pages/home";
import Shop from "../pages/shop";
import Pages from "../pages/pages";
import Blog from "../pages/blog";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import { ROUTES } from "../utils/constant";

export const routes = [
    {
        component: Home,
        path: ROUTES.home
    },

    {
        component: Shop,
        path: ROUTES.sjop
    },
    {
        component: Pages,
        path: ROUTES.pages
    },
    {
        component: Blog,
        path: ROUTES.blog
    },
    {
        component: AboutUs,
        path: ROUTES.aboutUs
    },
    {
        component: ContactUs,
        path: ROUTES.contactUs
    },


];