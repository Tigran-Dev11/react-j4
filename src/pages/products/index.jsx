import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMAGES } from "../../assets/images";

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

  if (loading) {
    return <div className="loadingCont"><img src={IMAGES.gif} alt="loading" className="loading" /></div>;
  }

  return (
   
    <div className="Products">
      {products?.map((post) => (
        <div className="prodContainer">
          <h1 key={post.id} className="title">
            {post.title}
          </h1>
          <img src={post.image} alt="image" />
          <h1 key={post.id} className="price">
            Price:{post.price}
          </h1>

          <h1 key={post.id} className="desc">
            {post.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Products;
