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

    return (
        <div className="productContainer">
            <div className="productItem">
            {products.category}
            <img src={products.image} alt="image" />
            {products.price}
            </div>
            <div>
                <button>-</button>
                {count}
                <button>+</button>

                <button onClick={addBasket}>add basket</button>
            </div>
        </div>
    );
};

export default ProductCard