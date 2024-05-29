import { IMAGES } from "../../assets";
import * as S from "./styled";

const SortedCothesAllMenu = () => {
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>BROWSE BY dress STYLE</S.ItemTitle>
        <S.FirstCasualContainer>
          <S.CasualImg src={IMAGES.Casual} alt="image" />
          <S.FormalImg src={IMAGES.Formal} alt="image" />
        </S.FirstCasualContainer>
        <S.SecondGymContainer>
          <S.PartyImg src={IMAGES.Party} alt="image" />
          <S.GymImg src={IMAGES.Gym} alt="image" />
        </S.SecondGymContainer>
      </S.Item>
    </S.Container>
  );
};

export default SortedCothesAllMenu;
