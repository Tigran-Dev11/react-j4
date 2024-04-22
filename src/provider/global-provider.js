import { createContext, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [basketItem, setBasketItem] = useState([]);

  let count = 10;

  return (
    <GlobalContext.Provider value={{ basketItem, setBasketItem, count }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
