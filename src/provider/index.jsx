import { createContext, useState } from "react"

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

    const [basketItem, setBasketItem] = useState([]);

    const removeBasketItem = (id) => {
        setBasketItem(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <GlobalContext.Provider value={{ basketItem, setBasketItem, removeBasketItem }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider };
