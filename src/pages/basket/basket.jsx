import { useSelector } from "react-redux";
import BasketItem from "../../components/basket-item";
import { productSelector } from "../../libs/redux/product-slice/product-selector";
import * as S from "./styled.js";
import { useTranslation } from "react-i18next";

const Basket = () => {
  const { t, i18n } = useTranslation();
  const { basketItems } = useSelector(productSelector);

  return (
    <S.BasketContainer>
      <S.BasketPageTitle>
        {!basketItems?.length ? t("basket.title2") : t("basket.title")}
      </S.BasketPageTitle>
      {basketItems?.map((product) => (
        <BasketItem key={product.id} product={product} />
      ))}
      {basketItems?.length ? (
        <S.ButtonDelivery>{t("basket.button")}</S.ButtonDelivery>
      ) : null}
    </S.BasketContainer>
  );
};

export default Basket;
