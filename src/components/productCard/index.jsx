/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { ROUTES, starsClothes } from "../../utils/constants";
import * as S from "./styled";
import { useState } from "react";
import { productActions } from "../../libs/redux/product-slice/product-slice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);
  const { t } = useTranslation()

  const dispatch = useDispatch();

  const minusItem = () => {
    if (count > 1) setCount(count - 1);
  };

  const plusItem = () => {
    setCount(count + 1);
  };

  const addBaskett = () => {
    const item = {
      id: product.id,
      name: product.title,
      img: product.image,
      count,
      price: product.price,
    };
    dispatch(productActions.addBasket(item));
  };

  const navigate = useNavigate()

  const goToSingleProduct = () => {
    navigate(ROUTES.singleProduct)
  }
  return (
    <S.productContainer>
      <S.productItem>
        <S.productImg onClick={goToSingleProduct} src={product?.image} alt="image" />
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
          <S.addButton onClick={addBaskett}>{t("newArriwals.buttonName")}</S.addButton>
        </S.addToCardContainer>
      </S.addBasket>
    </S.productContainer>
  );
};

export default ProductCard;
