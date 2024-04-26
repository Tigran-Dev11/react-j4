import Products from "../pages/products";

import { createContext, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = () => {
  const [basketItem, setBasketItem] = useState([]);



  return (
    <GlobalContext.Provider value={{ basketItem, setBasketItem }}>
      <Products />
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };