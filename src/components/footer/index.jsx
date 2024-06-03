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
          <S.MapTitleContainer>
            <S.MapTitle>{t("locate.location")}</S.MapTitle>
            <S.MapTitle>{t("locate.street")}</S.MapTitle>
            <S.MapTitle>{t("locate.workDay")}</S.MapTitle>
            <S.MapTitle>{t("locate.offday")}</S.MapTitle>/
          </S.MapTitleContainer>
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
              <S.SocialItemsPath>{t("Social.SIGNUP")}</S.SocialItemsPath>
            </S.SocialItems>
            <S.SocialItems>
              <S.SocialItemsPath>{t("Social.subscribe")}</S.SocialItemsPath>
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
