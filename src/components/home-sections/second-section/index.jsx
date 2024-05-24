import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productSelector } from "../../../redux/product-slice/selector";

import { productActions } from "../../../redux/product-slice/product-slice";

const SecondSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);

  const { min, setMin } = useState(8);

  console.log(products, "products");

  useEffect(() => {
    dispatch(productActions.getProduct());
  }, []);

  return (
    <S.Container>
      {products.map((item, index) => {
       return (index <= min) ? ((<h1>{item.title}</h1>)) :(console.log("sxal"))
      })}
      

    </S.Container>
  );
};

export default SecondSection;
