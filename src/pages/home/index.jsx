import * as S from "./styled";
import { IMAGES } from "../../assets";
import Brands from "../../components/brands-section";
import Button from "../../common/button";
import NewArriwals from "../../components/shoes-description/new-arriwals";
import { purchasedProducts } from "../../utils/constants";



const Home = () => {
  return (
    <S.AllContentContainer>
      <S.HomeCont>
        <S.descriptionsCont>
          <S.sloganShoes>FIND CLOTHES THAT MATCHES YOUR STYLE</S.sloganShoes>
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
      <Brands />
      <NewArriwals />
    </S.AllContentContainer>
  );
};

export default Home;
