import * as S from "./styled";
import { IMAGES } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { headerMenus } from "../../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const goToBasketPage = () => {
    navigate(ROUTES.basket);
  };

  const goToProfile = () => {
    navigate(ROUTES.login);
  };

  const goToHome = () => {
    navigate(ROUTES.home)
  }
 

  return (
    <S.HeaderCont>
      <S.component>
        <S.titleShop onClick={goToHome}>SHOP.CO</S.titleShop>
        {headerMenus.map((menu, index) => {
          return <S.Link key={index}>{menu.title}</S.Link>;
        })}
        <S.menuList src={IMAGES.menu} />
        <S.itemContainer>
          <S.searchContainer>
            <S.searchIcon src={IMAGES.searchIcon} />
            <S.searchShoes type="text" />
          </S.searchContainer>
          <S.basketUser onClick={goToBasketPage} src={IMAGES.basket} />
          <S.userProfile src={IMAGES.profileUser} onClick={goToProfile} />
          <S.homeIcon src={IMAGES.homeIcon} onClick={goToHome}/>
        </S.itemContainer>
      </S.component>
    </S.HeaderCont>
  );
};

export default Header;
