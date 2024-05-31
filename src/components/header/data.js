import { ROUTES } from "../../utils/constants";

export const menu = (t) => [
  {
    title: t('menu.home'),
    path: ROUTES.home,
  },
  {
    title: "Products",
    path: ROUTES.products,
  },
  {
    title: "Shop",
    path: ROUTES.shop,
  },
  {
    title: "Weddings",
    path: ROUTES.weddings,
  },
  {
    title: "Service",
    path: ROUTES.service,
  },
  {
    title: "Contact",
    path: ROUTES.contact,
  },
];
