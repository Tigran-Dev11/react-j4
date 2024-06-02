import { useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { products } = useSelector(productSelector);
  console.log(products);
  const { "product-id": ProductId } = useParams();

  const product = products.find((item) => item.id == ProductId);

  return (
    <div>
      <h1>product name</h1>
      {/* <p>{product.name}</p>
      <img src={product.img} alt="image" />
      <p>{product.nutritions}</p> */}
    </div>
  );
};


export default SingleProduct;
