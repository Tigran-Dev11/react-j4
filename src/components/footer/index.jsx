import * as S from "./styled";
import SimpleMap from "../google-map";
import { IMAGES } from "../../assets/images";
import { menu } from "../header/data";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <S.FooterContainer>
      <S.MapContainer>
        <SimpleMap />
      </S.MapContainer>
      <S.MenusContainer>
        <S.MenuItemsContainer>
          <S.MapTitle>Location</S.MapTitle>
          <S.MapTitle>007,James bond street, London, England.</S.MapTitle>
          <S.MapTitle>Mon-Sat 10AM - 9PM</S.MapTitle>
          <S.MapTitle>Sun:Closed</S.MapTitle>
        </S.MenuItemsContainer>
        <S.MenuItemsContainer>
          <S.MenuItems>Menus</S.MenuItems>
          {menu(t).map(({ title, path }) => (
            <S.MenuItems key={path}>
              <S.MenuItempath href={path}>{title}</S.MenuItempath>
            </S.MenuItems>
          ))}
        </S.MenuItemsContainer>
        <S.MenuItemsContainer>
          <S.SocialPages>
            <S.SocialItems>
              <S.SocialItemsPath>SIGN UP AND SAVE</S.SocialItemsPath>
            </S.SocialItems>
            <S.SocialItems>
              <S.SocialItemsPath>
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </S.SocialItemsPath>
            </S.SocialItems>

            <S.SocialIconsContainer>
              <S.SocialItems>
                <S.SocialItemsPath href="https://www.instagram.com/?hl=en">
                  <S.SocialImg src={IMAGES.instagram}></S.SocialImg>
                </S.SocialItemsPath>
              </S.SocialItems>
              <S.SocialItems>
                <S.SocialItemsPath href="https://www.facebook.com/">
                  <S.SocialImg src={IMAGES.facebook}></S.SocialImg>
                </S.SocialItemsPath>
              </S.SocialItems>
              <S.SocialItems>
                <S.SocialItemsPath href="https://x.com/?lang-en=">
                  <S.SocialImg src={IMAGES.twitter}></S.SocialImg>
                </S.SocialItemsPath>
              </S.SocialItems>
            </S.SocialIconsContainer>
          </S.SocialPages>
        </S.MenuItemsContainer>
      </S.MenusContainer>
    </S.FooterContainer>
  );
};

export default Footer;
