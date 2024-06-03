import React from "react";
import * as S from "./styled";
import { ROUTES, footerDescription } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.home)
  }
  return (
    <S.Container>
      <S.WebTitleCont>
        <S.WebsiteName onClick={goToHome}>{t("footer.title")}</S.WebsiteName>
        <S.Description>{t("footer.descriptionContent")}</S.Description>
      </S.WebTitleCont>
      <S.itemContainer>
        {footerDescription(t).map(({ mainTitle, aboutWebsite }, index) => {
          return (
            <S.aboutWeb key={index}>
              <S.mainTitle key={index}>{mainTitle}</S.mainTitle>
              {aboutWebsite(t).map(({ title }) => {
                return <S.itemAbout key={title}>{title}</S.itemAbout>;
              })}
            </S.aboutWeb>
          );
        })}
      </S.itemContainer>
    </S.Container>
  );
};

export default Footer;
