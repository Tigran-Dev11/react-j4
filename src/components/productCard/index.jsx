import "./style.css"
import { useState, useContext } from "react";
import { GlobalContext } from "../../provider";

const ProductCard = ({ products }) => {
  const [count, setCount] = useState(1);
  const { basketItems, setBasketItems } = useContext(GlobalContext);
  

  const addBasket = () => {
    const basketCard = {
      id: products.id,
      title: products.title,
      image: products.image,
      price: products.price,
      count
    }

    setBasketItems((prevState) => {
      const filterItem = prevState.find((item) => item.id === products.id);

      if (filterItem) {
        const newData = prevState.map((elem) => {
          if (elem.id === products.id) {
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

  }

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const plusItem = () => {
    if (count < 10)
      setCount(count + 1)
  }

  return (
    <div className="productContainer">
      <div className="productItem">
        {products.category}
        <img src={products.image} alt="image" className="pruductImg" />
        <p>{products.price * count} $</p>
      </div>
      <div className="addBasket">
        <div className="productCount">
          <button onClick={minusItem}>-</button>
          {count}
          <button onClick={plusItem}>+</button>
        </div>
        <button onClick={addBasket} className="addButton">Add Basket</button>
      </div>
    </div>
  );
};

export default ProductCard