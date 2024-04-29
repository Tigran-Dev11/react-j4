import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider";
import BasketCard from "../../components/basketcard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";


const Basket = () => {
  const { basketItems, setBasketItems } = useContext  (GlobalContext) ;

  const clearAll = () => {
    const deleteAll = setBasketItems([]);
    localStorage.clear();
  };

  const navigate = useNavigate();

  const orderItems = () => {

    navigate(ROUTES.order)

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
          <button onClick={orderItems}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;