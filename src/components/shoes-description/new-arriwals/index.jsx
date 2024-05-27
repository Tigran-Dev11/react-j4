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
  let cycle = 0;

  const viewAll = () => {
    console.log("hello");
  };
  return (
    <S.shoesContainer>
      <S.TopPiece>
        <S.titleShoes>NEW ARRIVALS </S.titleShoes>
      </S.TopPiece>
      <S.productTop>
        {products?.map((product) => {
          cycle += 1;
          if (cycle >= 18) {
            return;
          } else if (cycle >= 14) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </S.productTop>
      <S.viewAllContainer>
        <S.viewAllClothes onClick={viewAll}>View All</S.viewAllClothes>
      </S.viewAllContainer>
    </S.shoesContainer>
  );
};

export default NewArriwals;
