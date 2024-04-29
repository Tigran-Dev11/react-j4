import "./style.scss";
import axios from "axios";
import { useEffect, useState} from "react";
import { IMAGES } from "../../assets/images";

import ProductCart from "../../components/product-card";

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
    return (
      <div className="loadingCont">
        <img src={IMAGES.gif} alt="loading" className="loading" />
      </div>
    );
  }


  return (
    <div className="Products">
    {products?.map((product) => (

   <ProductCart key={product.id} product={product}/>
  ))}
  </div>
  )
}

export default Products;
