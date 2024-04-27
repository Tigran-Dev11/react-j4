import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider";
import BasketCard from "../../components/basketcard";
import Button from "../../commons/button";

const Basket = () => {
  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const clearAll = () => {
    const deletAll = setBasketItems([]);
    localStorage.clear();
  }

  return (
    <div className="basketContainer">
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <div className="basketItem">
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
        <div className="basketButtons">
          <button onClick={clearAll}>Delete All Items</button>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;