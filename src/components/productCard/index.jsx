import { useContext, useState } from "react";
import { GlobalContext } from "../../provider"
import "./style.css";

const ProductCard = ({ products }) => {
  const [count, setCount] = useState(1);
  const { basketItems, setBasketItems } = useContext(GlobalContext);
  const { id, title, image, price } = products;


  const addNewBasket = () => {
    const basketCard = {
      id:products.id,
      title:products.title,
      image:products.image,
      price:products.price,
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

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="productCont">
      <div className="productTopItem">
        <p className="title">{title}</p>
        <img src={image} alt="image" className="productImg" />
        <p>{price * count} $</p>
      </div>
      <div className="addBasket">
        <div className="productCount">
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
        <button onClick={addNewBasket} className="addButton">
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

