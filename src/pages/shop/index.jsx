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

    return (
        <div>
            {products.map((product) => {
                return <ProductItem key={product.id} />
            })}
        </div>
    )
};

export default Shop;