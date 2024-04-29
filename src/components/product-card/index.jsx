import { useContext, useState } from "react";
import "./style.css";
import { GlobalContext } from "../../provider/global-provider";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);

  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const { id, title, image, price } = product;

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusItem = () => {
    setCount(count + 1);
  };

  const addBasket = () => {
    const basketCard = {
      id,
      title,
      image,
      price,
      count
    };

    setBasketItems((prevState) => {
      const filterItem = prevState.find((item) => item.id === id);

      if (filterItem) {
        const newData = prevState.map((elem) => {
          if (elem.id === id) {
            return {
              ...elem,
              count: elem.count + count
            };
          }
          return elem;
        });

        localStorage.setItem("basketItems", JSON.stringify(newData));

        return newData;
      } else {
        const newData = [...prevState, basketCard];

        localStorage.setItem("basketItems", JSON.stringify(newData));
        return newData;
      }
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
        <button  onClick={addBasket}> add card</button>
      </div>
    </div>
  );
};

export default ProductCard;