import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled.js";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js"
import { useEffect } from "react";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";
import ProductItem from "../../components/product-item"




const Shop = () => {

    const { products } = useSelector(productSelector);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(productActions.getProducts());
    }, []);

    console.log(products);

    return (
        <div>
<<<<<<< HEAD
            {products.map((product) => {
                return <ProductItem key={product.id} />
            })}
=======
            {products?.map((product) => (
                <ProductItem key={product.id} />
            ))}
>>>>>>> 0583c539a76d8b75dc5218b73a7e489116580dbc
        </div>
    )
};

export default Shop;