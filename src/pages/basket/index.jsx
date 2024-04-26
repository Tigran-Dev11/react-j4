import "./style.scss"
import { GlobalContext } from "../../provider";
import { useContext } from "react";

const Basket = () => {
    const { basketItem, removeBasketItem } = useContext(GlobalContext);

    return (
        <div className="basketContainer">
            <h1>Basket</h1>
            {basketItem.map((item, index) => (
                <div key={index} className="basketItem">
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} className="basketItemImage" />
                    <p>{item.price}</p>
                    <button onClick={() => removeBasketItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
};

export default Basket;
