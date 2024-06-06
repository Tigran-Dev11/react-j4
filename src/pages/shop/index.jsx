import * as S from "./styled";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { productSelector } from "../../redux/product-slice/selector";
import { productActions } from "../../redux/product-slice/product-slice";
import ProductItem from "../../components/product-item";
import PageSlider from "../../components/big-slider";

const Shop = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(productSelector);

  const [min, setMin] = useState(10);

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);
  return (
    <S.ShopContainer>
      <S.TextContainer>
        <S.Title>SHOP COLLECTION</S.Title>
      </S.TextContainer>
      <S.ProductsContainer>
        {products.map((product ,index) =>(
          index <= min
          ?(
     
          <ProductItem product = {product}/>
        
          ) : null
        ))}
      </S.ProductsContainer>
    </S.ShopContainer>
  );
};

export default Shop;



