import { useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import { useParams } from "react-router-dom";



const SingleProduct = () =>{

    const { products } = useSelector(productSelector);
    const {productId} = useParams();

    const product = products.find((item)=> item.id == productId);

    console.log(products);
    return(
        <div>
            <h1>product name</h1>
            
        </div>
    )
};


export default SingleProduct;