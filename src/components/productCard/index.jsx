import "./style.css"
import { useState } from "react";

const ProductCard = ({ products }) => {
    const [count, setCount] = useState(1);


    const addBasket = () => {
        const item = {
            id: products.id,
            title: products.title,
            count,
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
                <button onClick={addBasket} className="addButton">add basket</button>
            </div>
        </div>
    );
};

export default ProductCard