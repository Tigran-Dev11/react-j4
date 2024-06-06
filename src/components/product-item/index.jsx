import * as S from "./styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../src/redux/product-slice/product-slice";

import { productSelector } from "../../redux/product-slice/selector";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const ProductItem = ({ product }) => {
  const { t } = useTranslation();

  const [count, setCount] = useState(1);
  const { products } = useSelector(productSelector);

  const dispatch = useDispatch();
  //     useEffect(() => {
  //       dispatch(productActions.getProduct());
  //     }, []);

  const plusBtn = () => {
    setCount(count + 1);
  };
  const minusBtn = () => {
    if (count > 1) setCount(count - 1);
  };

  const addBasket = (product) => {
    const item = {
      id: product.id,
      title: product.title,
      img: product.title,
      count,
      price: product.price,
    };
    dispatch(productActions.addBasket(item));
  };

  return (
    <S.ProductContainer>
      <NavLink to={`${ROUTES.products}/${product.id}`}>
        <S.ProductImg src={product.images[2]} alt={product.category.name}></S.ProductImg>
      </NavLink>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductPrice>
        {t("home.price")}: {product.price * count}$
      </S.ProductPrice>
      <S.CountContainer>
        <S.MinusBtn onClick={minusBtn}>-</S.MinusBtn>
        <S.CountPlace>{count}</S.CountPlace>
        <S.PlusBtn onClick={plusBtn}>+</S.PlusBtn>
      </S.CountContainer>
      <S.ButtonAddBasket onClick={() => addBasket(product)}>
        {t("home.btnAddBasket")}
      </S.ButtonAddBasket>
    </S.ProductContainer>
  );
};

export default ProductItem;
