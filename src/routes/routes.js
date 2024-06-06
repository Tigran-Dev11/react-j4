import { ROUTES } from "../utils/constant";
import Home from "../pages/home/home";
import Stores from "../pages/stores/stores";
import HelpSupport from "../pages/helpsupport/helpsupport";


export const routes = [

    {
        component:Home,
        path: ROUTES.home  
    },
    {
        component: Stores,
        path: ROUTES.stores
    },
    {
        component: HelpSupport,
        path: ROUTES.HelpSupport
    },

]