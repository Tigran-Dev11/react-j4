import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector"
 import { productActions } from "../../../redux/product-slice/product-slice";


const ForthSection = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { products } = useSelector(productSelector);

  const [min, setMin] = useState(4);

  const [count, setCount] = useState(1);


  const plusBtn = () => {
    setCount(count + 1);
  };
  const minusBtn = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{t("home.shopCollection")}</S.Title>
      </S.TextContainer>
      <S.ProductsContainer>

      {products.map((item, index) => {
        return index <= min
          ? (
      <S.ProductContainer>

                <S.ProductImg src={item.images[2]}></S.ProductImg>
                <S.ProductTitle>{item.title}</S.ProductTitle>
                <S.ProductPrice>{t("home.price")}: {item.price}$</S.ProductPrice>
                <S.CountContainer>
                <S.MinusBtn onClick={minusBtn}>-</S.MinusBtn>
                <S.CountPlace>{count}</S.CountPlace>
                <S.PlusBtn onClick={plusBtn}>+</S.PlusBtn>
              </S.CountContainer>
               <S.ButtonSeeMore>{t("home.btnAddBasket")}</S.ButtonSeeMore>
              </S.ProductContainer>

            ) 
          : null;
      })}
              </S.ProductsContainer>

    </S.Container>
  );
};

export default ForthSection;
