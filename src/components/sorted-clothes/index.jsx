import { IMAGES } from "../../assets";
import * as S from "./styled";

const SortedCothesAllMenu = () => {
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>BROWSE BY dress STYLE</S.ItemTitle>
        <S.FirstCasualContainer>
          <img src={IMAGES.Casual} alt="" />
          <img src={IMAGES.Formal} alt="" />
        </S.FirstCasualContainer>
        <S.SecondGymContainer>
          <img src={IMAGES.Party} alt="" />
          <img src={IMAGES.Gym} alt="" />
        </S.SecondGymContainer>
      </S.Item>
    </S.Container>
  );
};

export default SortedCothesAllMenu;
