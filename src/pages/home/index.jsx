import * as S from "./styled";
import { IMAGES } from "../../assets";
import Button from "../../common/button";
import NewArriwals from "../../components/shoes-description/new-arriwals";
import { brandsNames, commentsUsers, purchasedProducts } from "../../utils/constants";
import TopSelling from "../../components/shoes-description/top-selling";
import SortedCothesAllMenu from "../../components/sorted-clothes";
import { Carousel } from "../../common/carousel";
import { useTranslation } from "react-i18next";
import OurHappyCustomers from "../../components/our-happy-customers";
import Subscribe from "../../components/subscribe";

const Home = () => {
const {t} = useTranslation()
  return (
    <S.AllContentContainer>
      <S.HomeCont>
        <S.descriptionsCont>
          <S.sloganShoes>{t("home.sloganShoes")} </S.sloganShoes>
          <S.explanationShoes>
            {t("home.explanationShoes")}
          </S.explanationShoes>
          <Button>{t("home.shopButton")}</Button>
          <S.quantityCont>
            {purchasedProducts(t).map(({ productsBranch, quantity }, index) => {
              return (
                <S.listQuantity key={index}>
                  <S.Quantity>{quantity}</S.Quantity>
                  <S.Branches>{productsBranch}</S.Branches>
                </S.listQuantity>
              );
            })}
          </S.quantityCont>
        </S.descriptionsCont>
        <S.starsContainer>
          <S.smallStar src={IMAGES.smallstar} />
          <S.bigStar src={IMAGES.bigStar} />
        </S.starsContainer>
      </S.HomeCont>
      <Carousel data={brandsNames}/>
      <NewArriwals />
      <TopSelling />
      <SortedCothesAllMenu />
      <OurHappyCustomers />
      <Subscribe />
    </S.AllContentContainer>
  );
};

export default Home;
