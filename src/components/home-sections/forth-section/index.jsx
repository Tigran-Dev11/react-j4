import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector"
 import { productActions } from "../../../redux/product-slice/product-slice";


const ForthSection = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(productSelector);

  const [min, setMin] = useState(4);
  

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>SHOP COLLECTION</S.Title>
      </S.TextContainer>
      <S.ProductsContainer>

      {products.map((item, index) => {
        return index <= min
          ? (
      <S.ProductContainer>

                <S.ProductImg src={item.images[2]}></S.ProductImg>,
                <S.ProductTitle>{item.title}</S.ProductTitle>,
                <S.ProductPrice>Price: {item.price}$</S.ProductPrice>,
               <S.ButtonSeeMore>ADD BASKET</S.ButtonSeeMore>
              </S.ProductContainer>

            ) 
          : null;
      })}
              </S.ProductsContainer>

    </S.Container>
  );
};

export default ForthSection;
