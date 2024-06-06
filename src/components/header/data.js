import { ROUTES } from "../../utils/constants";

export const menu = (t) => [
  {
    title: t('menu.home'),
    path: ROUTES.home,
  },
  {
    title: t("menu.Products"),
    path: ROUTES.products,
  },
  {
    title: t("menu.Shop"),
    path: ROUTES.shop,
  },
  {
    title: t("menu.Weddings"),
    path: ROUTES.weddings,
  },
  {
    title: t("menu.Service"),
    path: ROUTES.service,
  },
  {
    title: t("menu.Contact"),
    path: ROUTES.contact,
  },
];
