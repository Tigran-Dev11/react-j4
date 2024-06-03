import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector";
import { useTranslation } from "react-i18next";
import ProductItem from "../../product-item";
import { productActions } from "../../../redux/product-slice/product-slice";

const SecondSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  const { t, i18n } = useTranslation();

  const [min, setMin] = useState(4);

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  const SeeMore = () => {
    if (min < products.length) {
      setMin(min + 4);
    }
  };

  

  return (
    <S.Container>
      <S.ProductsContainer>
        {products.map((product, index) => {
          return index <= min ? (
           <ProductItem product = {product} />
          ) : null;
        })}
      </S.ProductsContainer>
      <S.ButtonSeeMore onClick={SeeMore}>{t("home.btnMore")}</S.ButtonSeeMore>
    </S.Container>
  );
};

export default SecondSection;
