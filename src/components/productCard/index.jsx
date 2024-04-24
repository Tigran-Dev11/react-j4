import "./style.css"
import { useState, useContext } from "react";
import { GlobalContext } from "../../provider";

const ProductCard = ({ products }) => {
    const [count, setCount] = useState(1);
    const { basketItem, setBasketItem } = useContext(GlobalContext);



    const addBasket = () => {
        const item = {
            id: products.id,
            title: products.title,
            image: products.image,
            price: products.price,

        }

    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className="productContainer">
            <div className="productItem">
                {products.category}
                <img src={products.image} alt="image" className="pruductImg" />
                {products.price}
            </div>
            <div className="addBasket">
                <div className="productCount">
                    <button onClick={decrement}>-</button>
                    {count}
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={addBasket} className="addButton">Add Basket</button>
            </div>
        </div>
    );
};

export default ProductCard