import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../libs/redux/counter-slice/counter-selector.js"
import * as S from "./styled.js";
import { counterActions } from "../../libs/redux/counter-slice/counter-slice.js";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";

const ProductItem = ({ products }) => {

    const { number } = useSelector(counterSelector);

    const dispatch = useDispatch();

    const decrement = () => {
        if (number > 1)
            dispatch(counterActions.decrement());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const addBasket = () => {
        dispatch(productActions.addBasket());

    };


    return (
        <S.ProductsContainer>
            <S.ProductTitle>{products.name}</S.ProductTitle>
            <S.ProductImage src={products.img} alt="products" />
            <S.OrderButtons>
                <S.MinusButton onClick={decrement}>-</S.MinusButton>
                <S.ProductQuantity>{number}</S.ProductQuantity>
                <S.PlusButton onClick={increment}>+</S.PlusButton>
            </S.OrderButtons>
            <S.AddBasketButton onClick={addBasket}>Add Basket</S.AddBasketButton>
        </S.ProductsContainer>
    )
};


export default ProductItem;


