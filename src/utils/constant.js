
export const ROUTES = {
    home: "/",
    shop: "/shop",
    aboutUs: "/about-us",
    contactUs: "/contact-us",
    basket: "/basket",
    login: "/login"

};


export const headerMenu = (t) =>[
    {
        path: ROUTES.home,
        title: "Home"
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



export const FETCH_STATUS = {
    IDLE: "idle",
    PANDING: "pending",
    REJECTED: "rejected",
    SUCCESS: "success"
};




