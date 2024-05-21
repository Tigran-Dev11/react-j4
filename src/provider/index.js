import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);


  return (
    <GlobalContext.Provider value={{ basketItems, setBasketItems }}>
      {children}
    </GlobalContext.Provider>
  );
};
