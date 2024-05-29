import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector";

import { productActions } from "../../../redux/product-slice/product-slice";

const SecondSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);

  const [min, setMin] = useState(4);
  const [count, setCount] = useState();


  console.log(products, "products");

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  const SeeMore = () =>{
    if(min< products.length){
      setMin(min + 4)
    }
  }

  return (
    <S.Container>
      <S.ProductsContainer>
      {products.map((item, index) => {
        return index <= min
          ? (
              <S.ProductContainer>
                <S.ProductImg src={item.images[2]}></S.ProductImg>
                <S.ProductTitle>{item.title}</S.ProductTitle>
                <S.ProductPrice>Price: {item.price}$</S.ProductPrice>
               <S.ButtonAddBasket>ADD BASKET</S.ButtonAddBasket>
              </S.ProductContainer>
            ) 
          : null;
      })}
      </S.ProductsContainer>
<S.ButtonSeeMore onClick={SeeMore}>See More</S.ButtonSeeMore>
    </S.Container>
  );
};

export default SecondSection;
