import React, { useEffect } from "react";
import * as S from "./styled";
import ProductCard from "../../productCard";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../../libs/redux/product-slice/product-selector";
import { productActions } from "../../../libs/redux/product-slice/product-slice";
import { useTranslation } from "react-i18next";

const TopSelling = () => {
  const { products } = useSelector(productSelector);
const { t } = useTranslation()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);
  let cycle = 0;

  const viewAll = () => {
    console.log("hello");
  };

  return (
    <S.Container>
      <S.TopPiece>
        <S.TopTitle>{t("topSelling.title")}</S.TopTitle>
      </S.TopPiece>
      <S.ClothesPiece>
      {products?.map((product) => {
          cycle += 1;
          if (cycle >= 10) {
            return;
          } else if (cycle >= 6) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </S.ClothesPiece>
      <S.viewAllPiece>
        <S.viewAllClothes onClick={viewAll}>View All</S.viewAllClothes>
      </S.viewAllPiece>
    </S.Container>
  );
};

export default TopSelling;
