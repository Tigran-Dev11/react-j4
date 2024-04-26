import "./style.scss";
import axios from "axios";
import { useEffect, useState} from "react";
import { IMAGES } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await axios("https://fakestoreapi.com/products");

        if (response?.status === 200) {
          setProducts(response.data);
          setLoading(false);
          console.log(response.data);

        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getProduct();
  }, []);


  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const addBasket = () => {
    navigate(ROUTES.cart);
  };

  function incrementNum() {
    setCount(count + 1);
  }
  function decrementNum() {
    setCount(count - 1);
  }
  if (loading) {
    return (
      <div className="loadingCont">
        <img src={IMAGES.gif} alt="loading" className="loading" />
      </div>
    );
  }


  return (
    <div className="Products">
    {products?.map((product) => (

    <div className="prodContainer">
      <h1 key={product.id} className="title">
        {product.title}
      </h1>
      <img src={product.image} alt="image" />
      <h1 key={product.id} className="price">
        Price:{product.price}
      </h1>

      <h1 key={product.id} className="desc">
        {product.description}
      </h1>
      <div className="btnContainer">
        <button onClick={decrementNum} className="decrementbtn">
          -
        </button>
        {count}
        <button onClick={incrementNum} className="incrementbtn">
          +
        </button>

        <button onClick={addBasket} className="addbtn">
          Add Basket
        </button>
      </div>
    </div>
  ))}
  </div>
  )
}

export default Products;
