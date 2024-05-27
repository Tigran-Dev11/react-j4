export const ROUTES = {
  home: "/",
  shop: "/shop",
  about: "/about",
  login: "/login",
  signUp: "/sign-up",
  basket: "./basket",
};

export const headerMenu = [
  {
    path: ROUTES.home,
    title: "Home",
  },
  {
    path: ROUTES.shop,
    title: "Shop",
  },
  {
    path: ROUTES.about,
    title: "About",
  },
  {
    path: ROUTES.login,
    title: "Login",
  },
  {
    path: ROUTES.signUp,
    title: "Sign Up",
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
}
]