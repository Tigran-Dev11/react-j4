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
                <img src={products.image} alt="image" className="pruductImg" />
                {products.price}
            </div>
            <div className="addBasket">
                <div className="productCount">
                    <button>-</button>
                    {count}
                    <button>+</button>
                </div>
                <button onClick={addBasket} className="addButton">add basket</button>
            </div>
        </div>
    );
};

export default ProductCard