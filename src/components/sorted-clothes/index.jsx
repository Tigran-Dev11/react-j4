import * as S from "./styled";

const SortedCothesAllMenu = () => {
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>BROWSE BY dress STYLE</S.ItemTitle>
        <S.FirstCasualContainer>
          <S.CasualClothButton>Casual</S.CasualClothButton>
          <S.FormClothButton>Form</S.FormClothButton>
        </S.FirstCasualContainer>
        <S.SecondGymContainer>
          <S.PartyClothButton>Party</S.PartyClothButton>
          <S.GymClothButton>Gym</S.GymClothButton>
        </S.SecondGymContainer>
      </S.Item>
    </S.Container>
  );
};

export default SortedCothesAllMenu;
