import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item";
import { productSelector } from "../../redux/product-slice/selector.js";
import * as S from "./styled.js";

const Basket = () => {
  const { basketItems } = useSelector(productSelector);

  return (
    <S.BasketContainer>
      <S.Title>
        {!basketItems?.length ? "Basket is empty" : "Basket"}
      </S.Title>
      <S.ProductContainer>
      {basketItems?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
        </S.ProductContainer>

    </S.BasketContainer>
  );
};

export default Basket;