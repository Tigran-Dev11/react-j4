import { ROUTES } from "../../utils/constant";

export const headerMenu = (t) =>[
    {
        path: ROUTES.home,
        title: t('menu.home')
    },
    {
        path: ROUTES.shop,
        title: "Shop"
    },
    {
        path: ROUTES.aboutUs,
        title: "About Us"
    },
    {
        path: ROUTES.contactUs,
        title: "Contact Us"
    },

];
