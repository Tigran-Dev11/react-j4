import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js";
import { useEffect } from "react";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";
import ProductItem from "../../components/product-item";
import { shopMenu } from "../../utils/constant.js";
import * as S from "./styled.js";

const Shop = () => {
  const { products } = useSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  console.log(products,'products');

  return (
    <S.GeneralSection>
      <S.MenuContainer>
        {shopMenu.map(({ title, path }) => (
          <S.MenuItem key={path}>
            <S.LinkToHome to={path}>{title}</S.LinkToHome>
          </S.MenuItem>
        ))}
      </S.MenuContainer>
      <S.Container>
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.Container>
    </S.GeneralSection>
  );
};

export default Shop;
