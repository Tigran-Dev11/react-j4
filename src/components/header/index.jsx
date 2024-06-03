import * as S from "./styled";
import { IMAGES } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { headerMenus } from "./data";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const goToBasketPage = () => {
    navigate(ROUTES.basket);
  };

  const goToProfile = () => {
    navigate(ROUTES.login);
  };

  const goToHome = () => {
    navigate(ROUTES.home);
  };

  return (
    <S.HeaderCont>
      <S.component>
        <S.titleShop onClick={goToHome}>{t("header.title")}</S.titleShop>
       <S.menuContainer> {headerMenus(t).map((menu, index) => {
          return <S.Link key={index}>{menu.title}</S.Link>;
        })}
        </S.menuContainer>
        <S.itemContainer>
          <S.searchContainer>
            <S.searchIcon src={IMAGES.searchIcon} />
            <S.searchShoes type="text" />
            <S.languageSelect defaultValue="en" onChange={changeLanguage} >
              <S.languageOptionEng value="en">Eng</S.languageOptionEng>
              <S.languageOptionRus value="ru">Rus</S.languageOptionRus>
            </S.languageSelect>
          </S.searchContainer>
          <S.basketUser onClick={goToBasketPage} src={IMAGES.basket} />
          <S.userProfile src={IMAGES.profileUser} onClick={goToProfile} />
          <S.menuList src={IMAGES.menu} />
        </S.itemContainer>
      </S.component>
    </S.HeaderCont>
  );
};

export default Header;
