import { IMAGES } from "../assets/images";





export const ROUTES = {
  home: "/",
  contact: "/contact",
  products: "/products",
  singleProduct:"/products/:prod-id",
  weddings: "/weddings",
  shop: "/shop",
  service: "/service",
  notfound: "/*",
  basket:"/basket",
};

export const FETCH_STATUS = {
  IDLE: "idle",
  PANDING: "pending",
  REJECTED: "rejected",
  SUCCESS: "success",
};

export const Description =  (t) =>[
  {
    img: IMAGES.SewingMachine,
    title:t("fiftContainerOneDesc.title"),
    description: t("fiftContainerOneDesc.description"),
  },
  {
    img: IMAGES.TailorUser,
    title:t("fiftContainerSecDesc.title"),
    description:t("fiftContainerSecDesc.description"),
  },
  {
    img: IMAGES.Sewing,
    title:t("fiftContainerThirdDesc.title"),
    description: t("fiftContainerThirdDesc.description"),
  },
];
