import { useTranslation } from "react-i18next";
import * as S from "./styled";

const Subscribe = () => {

    const {t} = useTranslation()
  return (
    <S.Container>
      <S.Card>
        <S.nameCont>
          <S.Name>
            {t("subscribe.title")}
          </S.Name>
        </S.nameCont>
        <S.InputCont>
            <S.EmailInput placeholder={t("subscribe.emailInput")}>

            </S.EmailInput>
            <S.EmailButton>
                {t("subscribe.emailButton")}
            </S.EmailButton>
        </S.InputCont>
      </S.Card>
    </S.Container>
  );
};

export default Subscribe;
