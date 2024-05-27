import React from "react";
import * as S from "./styled";
import { footerDescription } from "../../utils/constants";

const Footer = () => {
  return (
    <S.Container>
      <S.WebTitleCont>
        <S.WebsiteName>SHOP.CO</S.WebsiteName>
        <S.Description>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </S.Description>
      </S.WebTitleCont>
      <S.itemContainer>
        {footerDescription.map(({mainTitle,aboutWebsite},index) => {
          return (
            <S.aboutWeb key={index}>
              <S.mainTitle key={index}>{mainTitle}</S.mainTitle>
              {aboutWebsite.map(({title})=>{
                return <S.itemAbout key={title}>{title}</S.itemAbout>
              })}
            </S.aboutWeb>
          );
        })}
      </S.itemContainer>
    </S.Container>
  );
};

export default Footer;
