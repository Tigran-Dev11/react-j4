import axios from "axios";
import React, { useEffect } from "react";
import * as S from "./styled";
import ProductCard from "../../productCard";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../../libs/redux/product-slice/product-selector";
import { productActions } from "../../../libs/redux/product-slice/product-slice";

const NewArriwals = () => {
  const { products } = useSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  
  return (
    <S.shoesContainer>
      <S.titleShoes>NEW ARRIVALS </S.titleShoes>
      <S.productTop>
        {products?.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </S.productTop>
    </S.shoesContainer>
  );
};

export default NewArriwals;
