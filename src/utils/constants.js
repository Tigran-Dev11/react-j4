import { IMAGES } from "../assets";

export const ROUTES = {
  home: "/",
  basket: "/basket",
  singleProduct:"/:product-id",
  login: "/login",
  register: "/register",
};

export const brandsNames = [
  {
    brand: IMAGES.versace,
  },
  {
    brand: IMAGES.zara,
  },
  {
    brand: IMAGES.gucci,
  },
  {
    brand: IMAGES.prada,
  },
  {
    brand: IMAGES.cKlein,
  },
];

export const headerMenus = [
  {
    title: "Shop",
  },
  {
    title: "On Sale",
  },
  {
    title: "New Arrivals",
  },
  {
    title: "Brands",
  },
];

export const purchasedProducts = (t) => [
  {
    quantity: "200+",
    productsBranch: t("purchasedProducts.productBranch1"),
  },
  {
    quantity: "2,000+",
    productsBranch: t("purchasedProducts.productBranch2"),
  },
  {
    quantity: "30,000+",
    productsBranch: t("purchasedProducts.productBranch3"),
  },
];

export const commentsUsers = [
  {
    title: "Sarah M.",
    fiveStars: IMAGES.fiveStars,
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    approvedUser: IMAGES.successIcon,
  },
  {
    title: "Alex K.",
    fiveStars: IMAGES.fiveStars,
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    approvedUser: IMAGES.successIcon,
  },
  {
    title: "James L.",
    fiveStars: IMAGES.fiveStars,
    description:
      "As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    approvedUser: IMAGES.successIcon,
  },
];
export const starsClothes = [
  {
    fiveStars: IMAGES.fiveStars,
  },
];

export const FETCH_STATUS = {
  IDLE: "idle",
  PANDING: "pending",
  REJECTED: "rejected",
  SUCCESS: "success",
};

export const footerDescription = (t) => [
  {
    mainTitle: t("footer.mainTitle1"),
    aboutWebsite: (t) => [
      {
        title: t("footer.title1"),
      },
      {
        title: t("footer.title2"),
      },
      {
        title: t("footer.title3"),
      },
      {
        title: t("footer.title4"),
      },
    ],
  },
  {
    mainTitle: t("footer.mainTitle2"),
    aboutWebsite: (t) => [
      {
        title: t("footer.title5"),
      },
      {
        title: t("footer.title6"),
      },
      {
        title: t("footer.title7"),
      },
      {
        title: t("footer.title8"),
      },
    ],
  },
  {
    mainTitle: t("footer.mainTitle3"),
    aboutWebsite: (t) => [
      {
        title: t("footer.title9"),
      },
      {
        title: t("footer.title10"),
      },
      {
        title: t("footer.title11"),
      },
      {
        title: t("footer.title12"),
      },
    ],
  },
  {
    mainTitle: t("footer.mainTitle4"),
    aboutWebsite: (t) => [
      {
        title: t("footer.title13"),
      },
      {
        title: t("footer.title14"),
      },
      {
        title: t("footer.title15"),
      },
      {
        title: t("footer.title16"),
      },
    ],
  },
];
