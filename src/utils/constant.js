
export const ROUTES = {
    home: "/",
    shop: "/shop",
    pages:"/pages",
    blog:"/blog",
    aboutUs:"/about-us",
    contactUs:"/contact-us"

};



export const headerMenu = [
    {
        path:ROUTES.home,
        title:"Home"
    },
    {
        path:ROUTES.shop,
        title:"Shop"
    },
    {
        path:ROUTES.pages,
        title:"Pages"
    },
    {
        path:ROUTES.blog,
        title:"Blog"
    },
    {
        path:ROUTES.aboutUs,
        title:"About Us"
    },
    {
        path:ROUTES.contactUs,
        title:"Contact Us"
    },
];


export const footerMenu = [

    {
        id:1,
        title:"My Account",
        items:[
            {
                name:"My Account"
            },

            {
                name:"Order History"
            },

            {
                name:"Shoping Cart"
            },

            {
                name:"Wishlist"
            },
        ]
    },

    {
        id:2,
        title:"Helps",
        items:[
            {
                name:"Contact"
            },

            {
                name:"Faqs"
            },

            {
                name:"Terms & Condition"
            },

            {
                name:"Privacy Policy"
            },
        ]
    },

    {
        id:3,
        title:"Proxy",
        items:[
            {
                name:"About"
            },

            {
                name:"Shop"
            },

            {
                name:"Product"
            },

            {
                name:"Track Order"
            },
        ]
    },

    {
        id:4,
        title:"Categories",
        items:[
            {
                name:"Fruit & Vegetables"
            },

            {
                name:"Meat & Fish"
            },

            {
                name:"Bread & Bakery"
            },

            {
                name:"Beauty & Health"
            },
        ]
    },
]