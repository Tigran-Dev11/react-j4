import "./style.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../provider";
import { IMAGES } from "../../assets/images";

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

  const removeItem = ()=>{
    
  }

  return (
    <div className="product-card-container">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="counter-container">
        <button onClick={minusItem}>-</button>
        {count}
        <button onClick={plusItem}>+</button>
        <p>{price * count} $</p>
        <img src={IMAGES.removeIcon} alt="icon" className="removeItem" onClick={removeItem}/>
      </div>
    </div>
  );
};

export default BasketCard;