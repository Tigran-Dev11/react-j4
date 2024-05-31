import * as S from "./styled";
import { useTranslation } from "react-i18next";


const ThirdSection = () => {

  const { t, i18n } = useTranslation();

  return (
    <S.Container>
      <S.Text>{t("home.titleMade")}</S.Text>
      <S.ButtonLearn>{t("home.btnLeranMore")}</S.ButtonLearn>
    </S.Container>
  );
};

export default ThirdSection;
