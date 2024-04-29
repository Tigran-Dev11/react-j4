import { useState } from "react";
import "./style.css";

const Card = ({ products }) => {
  const [count, setCount] = useState(1);

  const addNewBasket = () => {
    const item = {
      id: products.id,
      title: products.title,
      price: products.price,
      count,
    };
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  let price = products.price;
  return (
    <div className="productContainer">
      <div className="productItem">
        {products.category}
        <img src={products.image} alt="image" className="pruductImg" />
        {(price = price * count)}
      </div>
      <div className="addBasket">
        <div className="productCount">
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
        <button onClick={addNewBasket} className="addBasketButton">
          add basket
        </button>
      </div>
    </div>
  );
};

export default Card;
