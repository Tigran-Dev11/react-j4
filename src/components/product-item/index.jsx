import * as S from "./styled.js";
import { productActions } from "../../libs/redux/product-slice/product-slice.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector.js";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addBasket = () => {
    const item = {
      id: product.id,
      name: product.name,
      img: product.img,
      count,
      price: product.price,
    };
    dispatch(productActions.addBasket(item));

    localStorage.setItem("basketItems", JSON.stringify(product));
  };

  return (
    <S.ProductsContainer>
      <S.ProductTitle>{product.name}</S.ProductTitle>
      <S.ProductImage src={product.img} alt="products" />
      <S.ProductPrice>{product.price * count} amd</S.ProductPrice>
      <S.OrderButtons>
        <S.MinusButton onClick={decrement}>-</S.MinusButton>
        <S.ProductQuantity>{count}</S.ProductQuantity>
        <S.PlusButton onClick={increment}>+</S.PlusButton>
      </S.OrderButtons>
      <S.AddBasketButton onClick={addBasket}>Add Basket</S.AddBasketButton>
    </S.ProductsContainer>
  );
};

export default ProductItem;
