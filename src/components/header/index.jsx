import * as S from "./styled";
import { menu } from "../../utils/constants";
import { IMAGES } from "../../assets/images/index";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Header = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  return (
    <S.HeaderContainer>
      <S.TopMenuContainer>
        <S.TextContainer>
          <S.Text>{t("header.sale")}</S.Text>
          <S.Text>{t("header.takeOff")}</S.Text>
        </S.TextContainer>
      </S.TopMenuContainer>
      <S.MenuContainer>
        <S.LogoContainer>
          <NavLink to="./">
            <S.Logo src={IMAGES.logo}></S.Logo>
          </NavLink>
        </S.LogoContainer>
        <S.MenuItemsContainer>
          {menu.map(({ title, path }) => (
            <S.MenuItems key={path}>
              <S.MenuItempath href={path}>{title}</S.MenuItempath>
            </S.MenuItems>
          ))}
        </S.MenuItemsContainer>
        <S.IconsContainer>
          <S.ImageContainer src={IMAGES.user}></S.ImageContainer>
          <S.ImageContainer src={IMAGES.basket}></S.ImageContainer>
          <S.ImageContainer src={IMAGES.search}></S.ImageContainer>
        </S.IconsContainer>
        <S.LanguageConatainer>
        <S.LanguageSelect defaultValue="en" onChange={changeLanguage}>
              <S.LanguageOptionEng value="en" >Eng</S.LanguageOptionEng>
              <S.LanguageOptionArm value="am">Arm</S.LanguageOptionArm>
            </S.LanguageSelect>
            </S.LanguageConatainer> 
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;
