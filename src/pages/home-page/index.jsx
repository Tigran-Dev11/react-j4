import { useState } from "react";
import "./style.scss";
import Card from "../../common/cards";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../aseets";
import { ROUTES } from "../../utils/constant";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios("https://fakestoreapi.com/products");
        if (response?.status) {
          setProducts(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const navigate = useNavigate();

  const goToBasket = () => {
    navigate(ROUTES.basket);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="homeSection">
      <div className="TopComponentsCont">
        <h1>Products</h1>
        <img
          src={IMAGES.basket}
          alt="icon"
          className="basketIcon"
          onClick={goToBasket}
        />
      </div>
      <div className="productMenu">
        {products.map((product) => (
          <Card key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
