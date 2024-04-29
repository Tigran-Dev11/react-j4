import { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../provider/global-provider";
import BasketCard from "../../components/basket-card";

const Basket = () => {
  const { basketItems } = useContext(GlobalContext);

  const deleteItems = () =>{

  }

  const delivery = ()=>{
    
  }

  return (
    <div className="basket">
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <button className="delete-item" onClick={deleteItems}>delete all items</button>
      <div className="basket-container">

        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
          
        ))}

       
      </div>

      <button className="delivery" onClick={delivery}>make a delivery</button>

    </div>
  );
};

export default Basket;