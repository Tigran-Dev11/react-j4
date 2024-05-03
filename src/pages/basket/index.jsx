import { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../provider/global-provider";
import BasketCard from "../../components/basket-card";
import useScreenSize from "../../hooks/ScreenSize";

const Basket = () => {
  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const { windowDimension } = useScreenSize();

  const deleteItems = () => {
    setBasketItems([]);
    localStorage.clear();
  };

  const delivery = () => {};

  return (
    <div className="basket">
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      {basketItems.length ? (
        <button className="delete" onClick={deleteItems}>
          delete all items
        </button>
      ) : (
        <button>go product</button>
      )}
      <div className="basket-container">
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
      </div>

      {basketItems.length ? (
        <button className="delivery" onClick={delivery}>
          make a delivery
        </button>
      ) : null}

      <div>
        <p>
          width: <strong>{windowDimension.winWidth}</strong>
        </p>

        <p>
          Height: <strong>{windowDimension.winHeight}</strong>
        </p>
      </div>
    </div>
  );
};

export default Basket;
