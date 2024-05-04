import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem("basketItems"));

    if (basketData?.length) {
      setBasketItems(basketData);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ basketItems, setBasketItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };