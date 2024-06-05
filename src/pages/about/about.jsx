import { useTranslation } from "react-i18next";
import { IMAGES } from "../../assets/images";
import * as S from "./styled.js";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <S.Section5>
      <S.Section5General>
        <S.Section5a>
          <S.Fruits src={IMAGES.fruits}></S.Fruits>
        </S.Section5a>
        <S.Section5b>
          <S.Text8>{t("section5.text1")}</S.Text8>
          <S.Text9>{t("section5.text2")}</S.Text9>
        </S.Section5b>
      </S.Section5General>
    </S.Section5>
  );
};

export default About;
