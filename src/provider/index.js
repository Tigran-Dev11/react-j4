import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [basketItem, setBasketItem] = useState([]);

  useEffect(() => {
    
    const basketData = JSON.parse(localStorage.getItem("basketItem"));

    if (basketData?.length) {
      setBasketItem(basketData);
    }
  }, []);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export { GlobalProvider, GlobalContext };
