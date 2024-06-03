import { useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import * as S from "./styled";
import BasketCard from "../../components/basketCard";

const Basket = () => {
  const { basketItems, total } = useSelector(productSelector);

  console.log(total, "total");

  return (
    <S.Container>
      <h1>{!basketItems?.length ? "Basket is empty" : ""}</h1>
      {basketItems?.map((product) => (
        <BasketCard key={product.id} product={product} />
      ))}
      <h1>{!basketItems?.length ? "" : `total : ${total}`}</h1>
    </S.Container>
  );
};
export default Basket;
