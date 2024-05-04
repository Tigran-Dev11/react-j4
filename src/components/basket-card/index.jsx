import { GlobalContext } from "../../provider";
import "./style.css";
import { useContext, useState } from "react";

const BasketCard = ({ item }) => {
  const [count, setCount] = useState(item.count);

  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const { id, title, image, price } = item;

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
      setBasketItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        });
      });
    }
  };

  const deleteItem = () => {
    setBasketItems((prev) => {
      const filterItems = prev.filter((item) => item.id !== id);

      localStorage.setItem("basketItems", JSON.stringify(filterItems));

      return filterItems;
    });
  };

  const plusItem = () => {
    setCount(count + 1);
    setBasketItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="product-card-container">
      <img src={image} alt={title} className="productImage"/>
      <h1 className="title">{title}</h1>
      <div className="counter-container">
        <p>{Math.floor(price * count)}$</p>
        <button onClick={minusItem}>-</button>
        <p>{count}</p>
        <button onClick={plusItem}>+</button>
        <button className="delete" onClick={deleteItem}>
          close
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
