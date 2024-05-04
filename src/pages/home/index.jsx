import { NavLink, useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import IMAGES from "../../aseets";
import ProductCard from "../../components/productCard";
import ROUTES from "../../utils/constant";



const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const goToBasketPage = () => {
     navigate(ROUTES.basket);
  };

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
  }, []);;

  if (loading) {
    return <img src={IMAGES.loader} alt="Loading" className="loader" />;
  }

  return (
    <div className="home">
      <div className="productTop">
        <h1>Products</h1>
        <img
          src={IMAGES.basketIcon}
          alt="icon"
          className="basketIcon"
          onClick={goToBasketPage}
        />
      </div>
      <div className="productMenu">
        {products?.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
