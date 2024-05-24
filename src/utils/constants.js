import { IMAGES } from "../assets/images";
export const ROUTES = {
    home: "/",
    contact:"/contact",
    products:"/products",
    weddings:"/weddings",
    shop:"/shop",
    service:"/service",
  };
  
  export const menu = [
    {
      title: "Home",
      path: ROUTES.home
    },
    {
        title:"Products",
        path:ROUTES.products
    },
    {
        title:"Shop",
        path:ROUTES.shop
    },
    {
        title:"Weddings",
        path:ROUTES.weddings
    },
    {
        title:"Service",
        path:ROUTES.service
    },
    {
        title:"Contact",
        path:ROUTES.contact
    },

  ];

  export const FETCH_STATUS = {
    IDLE: "idle",
    PANDING: "pending",
    REJECTED: "rejected",
    SUCCESS: "success"
  };



  export const Description = [
    {
        img:IMAGES.SewingMachine,
        title:"Quality",
        description:`Our objective is to design and tailor a 
        made-to-measure suit with a guaranteed fit. We ensure nothing but comfort, 
        style, and class whenever and wherever you are.`
    },
    {
        img:IMAGES.TailorUser,
        title:"Customisability",
        description:`There are many styles to select from when you browse through our gallery. 
        Every detail identifies your style. At the collaboration, you have complete control over the design process.`
    },
    {
        img:IMAGES.Sewing,
        title:"Convenience",
        description:`We bring our bespoke suit tailoring service directly to you at home,
         the office, or on location, so you have the minimum of interruptions during your busy schedule.`
    }

  ]