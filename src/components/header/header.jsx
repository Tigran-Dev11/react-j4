import { headerMenu } from "../../utils/constant";
import { IMAGES } from "../../assets/images";
import * as S from "./styled";
import { useTranslation } from "react-i18next";

const Header = () => {
  
const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <S.MenuHeader>
      <S.Logo src={IMAGES.apple}></S.Logo>
      <S.MenuContainer>
        {headerMenu(t).map(({ title, path }) => (
          <S.MenuItem key={path}>
            <S.LinkToHome to={path}>{title}</S.LinkToHome>
          </S.MenuItem>
        ))}
      </S.MenuContainer>

      <S.languageSelect defaultValue="en" onChange={changeLanguage}>
        <S.languageOptionEng value="en">Eng</S.languageOptionEng>
        <S.languageOptionRus value="ru">Rus</S.languageOptionRus>
      </S.languageSelect>
    </S.MenuHeader>
  );
};

export default Header;
