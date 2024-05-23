import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../libs/redux/counter-slice/counter-selector.js"
import * as S from "./styled.js";
import { counterActions } from "../../libs/redux/counter-slice/counter-slice.js";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ products }) => {

    const { number } = useSelector(counterSelector);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const decrement = () => {
        if (number > 1)
            dispatch(counterActions.decrement())
    };

    const increment = () => {
        dispatch(counterActions.increment())
    };

    const addBasket = () => {
        const basketCard = {
            id: products.id,
            name: products.name,
            img: products.img,
            number
        }
    }


    return (
        <S.ProductsContainer>
            <S.ProductTitle>{products.name}</S.ProductTitle>
            <S.ProductImage src={products.img} alt="Persimmon" />
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


