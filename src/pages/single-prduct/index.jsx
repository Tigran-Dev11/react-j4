import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../redux/product-slice/selector";

const SingleProduct = () => {
  const { products } = useSelector(productSelector);
  const { "prod-id": ProductId } = useParams();

  const product = products.find((item) => item.id == ProductId);

  console.log(products);

  return (
    <div>
      <h4>Product name</h4>
      <br />
      <br />
      <p>{product.title}</p>
      <br />
      <br />
      <h4>Product Description</h4>
      <br />
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
