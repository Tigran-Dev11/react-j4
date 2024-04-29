import { useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../hooks/use-global-context";

const BasketCard = ({ item }) => {
  const [count, setCount] = useState(item.count);

  const { basketItems, setBasketItems } = useGlobalContext()

  const { id, title, image, price } = item;

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
      setBasketItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1
            };
          }
          return item;
        });
      });
    }
  };

  const plusItem = () => {
    setCount(count + 1);
    setBasketItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="product-card-container">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="counter-container">
        <p>{Math.floor(price * count)} $</p>
        <button onClick={minusItem}>-</button>
        {count}
        <button onClick={plusItem}>+</button>
        {/* "       add delete item logic */}
      </div>
    </div>
  );
};

export default BasketCard;
