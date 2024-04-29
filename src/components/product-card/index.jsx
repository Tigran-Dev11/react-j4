import "./style.scss";

import { useContext, useState } from "react";
import { GlobalContext } from "../../provider/provider";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const ProductCart = ({ product }) => {
  const [count, setCount] = useState(1);

  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const { id, title, image, price } = product;

  const addBasket = () => {
    const basketCard = {
      id,
      title,
      image,
      price,
      count,
    };
    // navigate(ROUTES.basket);

    setBasketItems((prevState) => {
      const filterItem = prevState.find((item) => item.id === id);

      if (filterItem) {
        const newData = prevState.map((elem) => {
          if (elem.id === id) {
            return {
              ...elem,
              count: elem.count + count,
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

  const navigate = useNavigate();

  function plusNum() {
  
      setCount(count + 1);
    
  }
  function minusNum() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div className="cartContainer">
    <div className="prodContainer">
      <img src={image} alt={title}  />
      <h2 className="title">{title}</h2>
      <div className="counter-container">
        <p className="price">Price:  {Math.floor(price * count)} $</p>
        <div className="btnContainer">
        <button onClick={minusNum} className="decrementbtn">-</button>
        {count}
        <button onClick={plusNum} className="incrementbtn">+</button>
        <button onClick={addBasket} className="addbtn"> Add card</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCart;
