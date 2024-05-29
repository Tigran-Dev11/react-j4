import * as S from "./styled";
import { IMAGES } from "../../assets";
import Button from "../../common/button";
import NewArriwals from "../../components/shoes-description/new-arriwals";
import { brandsNames, purchasedProducts } from "../../utils/constants";
import TopSelling from "../../components/shoes-description/top-selling";
import SortedCothesAllMenu from "../../components/sorted-clothes";
import { Carousel } from "../../common/carousel";
import { useTranslation } from "react-i18next";

const Home = () => {
const {t, i18n} = useTranslation()
  return (
    <S.AllContentContainer>
      <S.HomeCont>
        <S.descriptionsCont>
          <S.sloganShoes>{t("home.sloganShoes")} </S.sloganShoes>
          <S.explanationShoes>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style
          </S.explanationShoes>
          <Button>Shop Now</Button>
          <S.quantityCont>
            {purchasedProducts.map(({ productsBranch, quantity }, index) => {
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
    </S.AllContentContainer>
  );
};

export default Home;
