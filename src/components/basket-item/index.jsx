import { useSelector } from "react-redux";
import * as S from "./styled.js";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js";
import { useState } from "react";
import { IMAGES } from "../../assets/index.js";



const BasketItem = ({product}) => {
    const {products} = useSelector(productSelector);
    const [count, setCount] = useState(product.count)

    return (
        <S.BasketItemContainer>
            <S.ProductName>{product.name}</S.ProductName>
            <S.basketItemImage src={product.img} alt="image" />
            <S.OrderButtons>
            <S.MinusButton>-</S.MinusButton>
            <S.ProductQuantity>{count}</S.ProductQuantity>
            <S.PlusButton>+</S.PlusButton>
            </S.OrderButtons>
            <S.RemoveIcon src={IMAGES.removeIcon} alt="icon" />
        </S.BasketItemContainer>
    )
};


export default BasketItem;