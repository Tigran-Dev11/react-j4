import * as S from "./styled";
import { Description } from "../../../utils/constants";

const FifthSection = () => {
  return (
    <S.Container key = " ">
      {Description.map((item) => (
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
