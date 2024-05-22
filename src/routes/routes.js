import { ROUTES } from "../utils/constant";
import Stores from "../pages/stores/stores";
import HelpSupport from "../pages/helpsupport/helpsupport";
import { Component } from "react";


export const routes = [
    {
        component: Stores,
        path: ROUTES.stores
    },
    {
        component: HelpSupport,
        title: "Help & Support"
    },

]