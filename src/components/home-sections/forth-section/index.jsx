import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ProductItem from "../../product-item";
import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector";
import { productActions } from "../../../redux/product-slice/product-slice";


const ForthSection = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { products } = useSelector(productSelector);

  const [min, setMin] = useState(4);

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{t("home.shopCollection")}</S.Title>
      </S.TextContainer>
      <S.ProductsContainer>
        {products.map((product, index) => {
          return index <= min ? <ProductItem product={product} /> : null;
        })}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default ForthSection;
