import * as S from "./styled";
import { IMAGES } from "../../assets/images/index";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { menu } from "./data";
import { ROUTES } from "../../utils/constants";





const Header = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  const menuToggle = () =>{

  }

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
        <S.BurgerContainer><S.BurgerMenu src={IMAGES.burger} onClick={menuToggle}></S.BurgerMenu></S.BurgerContainer>

        <S.MenuItemsContainer>
          {menu(t).map(({ title, path }) => (
            <S.MenuItems key={path}>
              <S.MenuItempath href={path}>{title}</S.MenuItempath>
            </S.MenuItems>
          ))}
        </S.MenuItemsContainer>
        <S.IconsContainer>
          <S.ImageContainer src={IMAGES.user}></S.ImageContainer>
          <NavLink to={ROUTES.basket}>
          <S.ImageContainer src={IMAGES.basket}></S.ImageContainer>
          </NavLink>
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
