/* eslint-disable react/prop-types */
import * as S from "./styled";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);

  const addBasket = () => {
    const item = {
      id: product.id,
      title: product.title,
      count,
    };
  };

  const minusItem = () => {
    return (count -= 1);
  };
  const plusItem = () => {
    return (count += 1);
  };
  console.log(product.id);

  return (
    <S.productContainer>
      <S.productItem>
        <img src={product?.images[0]} alt="image" className="pruductImg" />
        {product?.price}
      </S.productItem>
      <S.addBasket>
        <S.productCount>
          <S.minusItem onClick={minusItem}>-</S.minusItem>
          {count}
          <S.plusItem onClick={plusItem}>+</S.plusItem>
        </S.productCount>
        <S.addButton onClick={addBasket} className="addButton">
          add basket
        </S.addButton>
      </S.addBasket>
    </S.productContainer>
  );
};

export default ProductCard;