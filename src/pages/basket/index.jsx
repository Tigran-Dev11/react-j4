import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider/provider";
import BasketCard from "../../components/basketCard";
import Form from "../../components/basketCard/form";

const Basket = () => {
  const { basketItems } = useContext(GlobalContext);

  const deleteAll = () => {
    
    localStorage.removeItem("basketItems", JSON.stringify())
    
  };

  const order = () =>{
    if(basketItems){
        <Form/>
    }
  } 


  return (
    <div>
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <div>
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
        <button className="deleteAll" onClick={deleteAll}>Delete All</button>
        <button className="orderBtn" onClick={order}>Order</button>
      </div>
    </div>
  );
};

export default Basket;