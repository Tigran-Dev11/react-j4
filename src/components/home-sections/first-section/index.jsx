
import * as S from "./styled";
import { useTranslation } from "react-i18next";


const FirstContainer = () => {

  const { t, i18n } = useTranslation();

  return (
    <S.Container>
      <S.TextContainer>
        <S.FirstText>{t("home.look")}</S.FirstText>
        <S.SecText>{t("home.SpecialDay")}</S.SecText>
      </S.TextContainer>
      <S.BtnContainer>
        <S.Button>{t("home.btnTitle")}</S.Button>
      </S.BtnContainer>
    </S.Container>
  );
};

export default FirstContainer;
