import { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../provider/global-provider";
import BasketCard from "../../components/basket-card";

const Basket = () => {
  const { basketItems } = useContext(GlobalContext);

  return (
    <div>
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <div>
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}

         {/* delete all items locgic  */}

         {/* create order form logic */}
      </div>
    </div>
  );
};

export default Basket;
