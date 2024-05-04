import "./style.scss"
import { useContext } from "react";
import  {GlobalContext}  from "../../provider";
import BasketCard from "../../components/basket-card";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../utils/constant";
import IMAGES from "../../aseets";

const Basket = () => {
    const { basketItems, setBasketItems } = useContext(GlobalContext);
  
    const clearAll = () => {
      setBasketItems([]);
      localStorage.clear();
    };
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(ROUTES.home)
  }
    
  
    return (
      <div className="basketContainer">
     <div className="topContent">
     <h1>{!basketItems?.length ? "Basket is empty" : "Basket"}</h1>
      <img src={IMAGES.home} alt="home" className="homeButton" onClick={goToHomePage} />
     </div>
      <div className="basketItem">
        {basketItems.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
        <div className="basketBtn">
          {basketItems?.length ? <button  onClick={clearAll} className="clearall">Delete All Items</button> : null}
        </div>
      </div>
      </div>
    );
  };
  

export default Basket


