import "./style.scss";

import { useContext, useState } from "react";
import { GlobalContext } from "../../provider/provider";
import { Form } from "react-router-dom";

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

  const deleteItem = () => {
    setBasketItems((prev) => {


      const data = prev.filter((item) => {

        if (item.id == id) {
          
        return (
        item.id != id
        )

        }

        return item;

      });

      localStorage.setItem('basketItems', data)

      return data

    });
    
  };

  
  

  return (
    <div className="basketContainer">
      <div className="prodContainer">
        <div className="imgtitle">
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
        {/* <div className="counter-container"> */}
          <p>{Math.floor(price * count)} $</p>
          <div className="btnContainer">
          <button onClick={minusItem} className="decrementbtn">-</button>
          {count}
          <button onClick={plusItem} className="incrementbtn">+</button>
          <button onClick={deleteItem} className="removebtn">Delete</button>

          {/* </div> */}
        </div>
      </div>
     

    </div>
    
  );
};

export default BasketCard;
