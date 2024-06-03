import React, { useEffect } from "react";
import * as S from "./styled";
import ProductCard from "../../productCard";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../../libs/redux/product-slice/product-selector";
import { productActions } from "../../../libs/redux/product-slice/product-slice";
import { useTranslation } from "react-i18next";

const NewArriwals = () => {
  const { products } = useSelector(productSelector);

  const { t } = useTranslation()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  console.log(products);

  let cycle = 0;

  const viewAll = () => {};
  return (
    <S.shoesContainer>
      <S.TopPiece>
        <S.titleShoes>{t("newArriwals.title")}</S.titleShoes>
      </S.TopPiece>
      <S.productTop>
        {products?.map((product) => {
          cycle += 1;
          if (cycle >= 5) {
            return;
          } else if (cycle >= 0) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </S.productTop>
      <S.viewAllContainer>
        <S.viewAllClothes onClick={viewAll}>View All</S.viewAllClothes>
      </S.viewAllContainer>
    </S.shoesContainer>
  );
};

export default NewArriwals;
