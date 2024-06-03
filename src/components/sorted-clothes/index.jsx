import { useTranslation } from "react-i18next";
import { IMAGES } from "../../assets";
import * as S from "./styled";

const SortedCothesAllMenu = () => {

  const {t} = useTranslation()
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>{t("sortedBrands.mainTitle")}</S.ItemTitle>
        <S.FirstCasualContainer>
          <S.CasualBlock><S.title>{t("sortedBrands.titleCasual")}</S.title></S.CasualBlock>
          <S.FormalBlock><S.title>{t("sortedBrands.titleFormal")}</S.title></S.FormalBlock>
        </S.FirstCasualContainer>
        <S.SecondGymContainer>
          <S.PartyBlock><S.title>{t("sortedBrands.titleParty")}</S.title></S.PartyBlock>
          <S.GymBlock><S.title>{t("sortedBrands.titleGym")}</S.title></S.GymBlock>
        </S.SecondGymContainer>
      </S.Item>
    </S.Container>
  );
};

export default SortedCothesAllMenu;
