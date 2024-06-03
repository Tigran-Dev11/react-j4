import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled.js";
import { productSelector } from "../../redux/product-slice/selector.js";
import { useState } from "react";

import { productActions } from "../../redux/product-slice/product-slice.js";

const CartItem = ({ product }) => {
  const { products } = useSelector(productSelector);
  const [count, setCount] = useState(product.count);
  const dispatch = useDispatch();

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusItem = () => {
    setCount(count + 1);
  };

  const deleteItem = () => {
    dispatch(productActions.deleteItem(product));
  };

  return (
    <S.CartItemContainer>
      <S.CartItemImage src={product.images} alt="image" />
      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ProductPrice>{product.price * count} $</S.ProductPrice>
      <S.OrderButtons>
        <S.MinusBtn onClick={minusItem}>-</S.MinusBtn>
        <S.CountContainer>{count}</S.CountContainer>
        <S.PlusBtn onClick={plusItem}>+</S.PlusBtn>
      </S.OrderButtons>
      <S.DeleteBtn  onClick={() => deleteItem()}>Delete Product</S.DeleteBtn>
    </S.CartItemContainer>
  );
};

export default CartItem;