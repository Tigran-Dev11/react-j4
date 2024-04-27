import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider";
import BasketCard from "../../components/basketcard";
import Button from "../../commons/button";

const Basket = () => {
  const { basketItems } = useContext(GlobalContext);


  // const clearAll = ()=>{
  //   setBasketItems((prev)=>{
  //     return prev.map((elem)=>{
  //       return {}
  //     })
  //   })
  // }

  return (
    <div className="basketContainer">
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <div className="basketItem">
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
        <div className="basketButtons">
        <button>Delete All Items</button>
        <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;