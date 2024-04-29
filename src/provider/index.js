import { createContext,useEffect,useState } from "react";

const GlobalContext = createContext({})

const GlobalProvider = ({child})=>{

   useEffect(()=>{
    const [basketItem,setBasketItem] = useState([])
    const basketData = JSON.parse(localStorage.getItem("basketItem"))


    if(basketData.length){
        setBasketItem(basketData)
    }
   },[])

    return (
        <GlobalContext.Provider>
            {child}
        </GlobalContext.Provider>
    )
};


export {GlobalProvider, GlobalContext};