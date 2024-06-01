import * as S from "./styled.js";
import Button from "../../commons/button";
import { IMAGES } from "../../assets/index.js";
import HeaderSearchInput from "../../commons/header-search-input/index.jsx";
import { ROUTES, headerMenu } from "../../utils/constant.js";
import { NavLink } from "react-router-dom";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderTop>
        <S.HeaderTopDivOne>
          <S.HeaderTopText>
            Store Location: Lincoln-344, Illinois, Chicago, USA
          </S.HeaderTopText>
        </S.HeaderTopDivOne>
        <S.HeaderTopDivTwo>
          <NavLink to={ROUTES.login}>
            <Button title="Sign In" />
          </NavLink>
          <Button title="Sign Up" />
          <S.TranslateContainer defaultValue="en" onChange={changeLanguage}>
            <S.SetLanguage value="en">Eng</S.SetLanguage>
            <S.SetLanguage value="am">Arm</S.SetLanguage>
          </S.TranslateContainer>
        </S.HeaderTopDivTwo>
      </S.HeaderTop>
      <S.HeaderSearch>
        <S.HeaderSearchDivOne>
          <S.HeaderLogoOne src={IMAGES.headerLogoOne} />
          <S.HeaderLogoTwo src={IMAGES.headerLogoTwo} />
        </S.HeaderSearchDivOne>
        <S.HeaderSearchDivTwo>
          <HeaderSearchInput type="text" placeholder="Search" />
        </S.HeaderSearchDivTwo>
        <S.HeaderSearchDivThree>
          <S.HeaderIcon src={IMAGES.heartIcon} alt="icon" />
          <NavLink to={ROUTES.basket}>
            <S.HeaderIcon src={IMAGES.basketIcon} alt="basket" />
          </NavLink>
        </S.HeaderSearchDivThree>
      </S.HeaderSearch>
      <S.HeaderMenu>
        <S.HeaderMenuDivOne>
          <S.HeaderMenuList>
            {headerMenu(t).map(({ path, title }) => (
              <S.HeaderMenuListItem key={path}>
                <S.Link to={path}>{title}</S.Link>
              </S.HeaderMenuListItem>
            ))}
          </S.HeaderMenuList>
        </S.HeaderMenuDivOne>
        <S.HeaderMenuDivTwo>
          <S.HeaderMenuAddress>Tel:(219) 555-0114</S.HeaderMenuAddress>
        </S.HeaderMenuDivTwo>
      </S.HeaderMenu>
    </S.HeaderContainer>
  );
};

export default Header;
