export const ROUTES = {
  home: "/",
  shop: "/shop",
  about: "/about",
  login: "/login",
  signUp: "/sign-up",
  basket: "/basket",
};

export const headerMenu =(t)=> [
  {
    path: ROUTES.home,
    title: t("header.title"),
  },
  {
    path: ROUTES.shop,
    title: t("header.shop"),
  },
  {
    path: ROUTES.about,
    title: t("header.about"),
  },
  {
    path: ROUTES.login,
    title: t("header.login"),
  },
  {
    path: ROUTES.signUp,
    title: t("header.sign-up"),
  },
];

export const shopMenu = [
  {
    path: ROUTES.shop,
    title: "Shop",
  },
  {
    path: ROUTES.basket,
    title: "Basket",
  },
];

export const FETCH_STATUS = {
  IDLE: "idle",
  PANDING: "pending",
  REJECTED: "rejected",
  SUCCESS: "success",
};
