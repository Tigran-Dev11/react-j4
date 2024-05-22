import * as S from "./styled";
import { useState, useContext } from "react";

const ProductCard = ({ products }) => {
  const [count, setCount] = useState(1);


  // const addBasket = () => {
  //   const basketCard = {
  //     id: products.id,
  //     title: products.title,
  //     image: products.image,
  //     price: products.price,
  //     count,
  //   };

  //   setBasketItems((prevState) => {
  //     const filterItem = prevState.find((item) => item.id === products.id);

  //     if (filterItem) {
  //       const newData = prevState.map((elem) => {
  //         if (elem.id === products.id) {
  //           return {
  //             ...elem,
  //             count: elem.count + count,
  //           };
  //         }
  //         return elem;
  //       });

  //       localStorage.setItem("basketItems", JSON.stringify(newData));

  //       return newData;
  //     } else {
  //       const newData = [...prevState, basketCard];

  //       localStorage.setItem("basketItems", JSON.stringify(newData));
  //       return newData;
  //     }
  //   });
  // };

  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusItem = () => {
    if (count < 10) setCount(count + 1);
  };

  return (
    <S.productContainer>
      {/* {products.title}
      <S.productItem>
        <S.productImg src={products.image} alt="image" />
        <p>{products.price * count} $</p>
      </S.productItem>
      <S.addBasket>
        <S.productCount>
          <S.minusItem onClick={minusItem}>-</S.minusItem>
          <p>{count}</p>
          <S.plusItem onClick={plusItem}>+</S.plusItem>
        </S.productCount>
        <S.addBasketButton onClick={addBasket}>Add Basket</S.addBasketButton>
      </S.addBasket> */}
    </S.productContainer>
  );
};

export default ProductCard;
