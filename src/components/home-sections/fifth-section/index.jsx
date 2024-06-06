import * as S from "./styled";
import { Description } from "../../../utils/constants";
import { useTranslation } from "react-i18next";


const FifthSection = () => {

  const { t, i18n } = useTranslation();

  return (
    <S.Container key = " ">
      {Description(t).map((item) => (
        <S.InfoContainer>
          <S.InfoIcon src={item.img}></S.InfoIcon>
          <S.InfoTitle>{item.title}</S.InfoTitle>
          <S.InfoText>{item.description}</S.InfoText>
        </S.InfoContainer>
      ))}
    </S.Container>
  );
};

export default FifthSection;
