import Basket from "../pages/basketPage";
import Home from "../pages/home";
import ROUTES from "../utils/constant";

const routes = [
    {
        component:Home,
        path:ROUTES.home
    },
    {
        component:Basket,
        path:ROUTES.basket
    }
]

export default routes