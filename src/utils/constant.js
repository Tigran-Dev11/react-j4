export const ROUTES = {
    home: "/",
    register: "/register",
    login: "/login",
    products:"/products",
    userpage:"/userpage",
    basket:"/basket",
    order:"/order"

};


export const menu = [
    {
        title: "Home",
        path: ROUTES.home
    },
    {
        title: "Login",
        path: ROUTES.login
    },
    {
        title: "Register",
        path: ROUTES.register
    },
    {
        title:"Products",
        path:ROUTES.products
    },
    {
        title:"Basket",
        path:ROUTES.basket
    },
    {
        title:"Order",
        path:ROUTES.order
    },
];

export const API = {
    products:'https://fakestoreapi.com/products'
 }