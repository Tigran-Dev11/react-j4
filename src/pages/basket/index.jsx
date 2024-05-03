import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider/provider";
import BasketCard from "../../components/basketCard";
import Form from "../../components/basketCard/form";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();

  const { basketItems, setBasketItems } = useContext(GlobalContext);

  const deleteAll = () => {
    setBasketItems([]);

    localStorage.clear();
  };

  const order = () => {
    if (basketItems) {
      <Form />;
    }
  };

  const goProduct = () => {
    navigate("/products");
  };

  return (
    <div className="basket">
      <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <div  className="basketContainer">
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}

      </div>
      {basketItems.length ? (
          <button className="deleteAll" onClick={deleteAll}>
            Delete All
          </button>
        ) : (
          <button className="goproductbtn" onClick={goProduct}>
            Go Product
          </button>
        )}

        {basketItems.length ? (
          <button className="orderBtn" onClick={order}>
            Order
          </button>
        ) : null}
    </div>
  );
};

export default Basket;
