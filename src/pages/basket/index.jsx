import "./style.css";
import BasketCard from "../../components/basket-card";
import { useGlobalContext } from "../../hooks/use-global-context";

const Basket = () => {
  const { basketItems } = useGlobalContext();

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
