import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector";
import { useTranslation } from "react-i18next";

import { productActions } from "../../../redux/product-slice/product-slice";

const SecondSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  const { t, i18n } = useTranslation();

  const [min, setMin] = useState(4);
  const [count, setCount] = useState(1);

  console.log(products, "products");

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  const SeeMore = () => {
    if (min < products.length) {
      setMin(min + 4);
    }
  };

  const plusBtn = () => {
    setCount(count + 1);
  };
  const minusBtn = () => {
    if (count > 1) setCount(count - 1);
  };

  const addBasket = (product, id) => {
    const item = {
      id,
      title: product.title,
      img: product.title,
      count,
      price: product.price,
    };
    dispatch(productActions.addBasket(item));
  };

  return (
    <S.Container>
      <S.ProductsContainer>
        {products.map((product, index) => {
          return index <= min ? (
            <S.ProductContainer>
              <S.ProductImg src={product.images[2]}></S.ProductImg>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>
              {t("home.price")}: {product.price * count}$
              </S.ProductPrice>

              <S.CountContainer>
                <S.MinusBtn onClick={minusBtn}>-</S.MinusBtn>
                <S.CountPlace>{count}</S.CountPlace>
                <S.PlusBtn onClick={plusBtn}>+</S.PlusBtn>
              </S.CountContainer>
              <S.ButtonAddBasket onClick={() => addBasket(product.id)}>
                {t("home.btnAddBasket")}
              </S.ButtonAddBasket>
            </S.ProductContainer>
          ) : null;
        })}
      </S.ProductsContainer>
      <S.ButtonSeeMore onClick={SeeMore}>{t("home.btnMore")}</S.ButtonSeeMore>
    </S.Container>
  );
};

export default SecondSection;
