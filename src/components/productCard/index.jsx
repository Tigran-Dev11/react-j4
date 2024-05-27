/* eslint-disable react/prop-types */
import { starsClothes } from "../../utils/constants";
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
    if (count > 1) setCount(count - 1);
  };

  const plusItem = () => {
    setCount(count + 1);
  };
  return (
    <S.productContainer>
      <S.productItem>
        <S.productImg src={product?.images[0]} alt="image" />
        <S.productTitle>{product.title}</S.productTitle>
        {starsClothes.map((item, index) => {
          return <S.fiveStar key={index} src={item.fiveStars} alt="image" />;
        })}
        <S.PriceProduct>
          {"$" + Math.floor(product?.price * count)}
        </S.PriceProduct>
      </S.productItem>
      <S.addBasket>
        <S.productCount>
          <S.minusItem onClick={minusItem}>-</S.minusItem>
          {count}
          <S.plusItem onClick={plusItem}>+</S.plusItem>
        </S.productCount>
        <S.addToCardContainer>
          <S.addButton>Add To Card</S.addButton>
        </S.addToCardContainer>
      </S.addBasket>
    </S.productContainer>
  );
};

export default ProductCard;
