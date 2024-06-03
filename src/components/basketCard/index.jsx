/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import * as S from "./styled.js";
import { useState } from "react";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";
import { IMAGES } from "../../assets/index.js";

const BasketCard = ({ product }) => {
  const [count, setCount] = useState(product?.count);

  const dispatch = useDispatch();

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    dispatch(productActions.removeItem(product));
  };

  return (
    <S.BasketItemContainer>
      <S.basketItemImage src={product.img} alt="image" />
      <S.ProductName>{product.name}</S.ProductName>
      <S.ProductPrice>{product.price * count} $</S.ProductPrice>
      <S.OrderButtons>
        <S.MinusButton onClick={minusItem}>-</S.MinusButton>
        <S.ProductQuantity>{count}</S.ProductQuantity>
        <S.PlusButton onClick={plusItem}>+</S.PlusButton>
      </S.OrderButtons>
      <S.RemoveIcon src={IMAGES.deleteIcon} alt="icon" onClick={removeItem} />
    </S.BasketItemContainer>
  );
};

export default BasketCard;
