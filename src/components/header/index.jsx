import * as S from "./styled";
import { menu } from "../../utils/constants";
import { IMAGES } from "../../assets/images/index";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.TopMenuContainer>
        <S.TextContainer>
          <S.Text>Mega Sale</S.Text>
          <S.Text>Take 10% OFF</S.Text>
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
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;
