import { IMAGES } from "../../assets/index.js";
import { footerMenu } from "../../utils/constant.js";
import * as S from "./styled.js";


const Footer = () => {

    return (
        <S.FooterContainer>
            <S.FooterDivOne>
                <S.FooterIconsContainer>
                    <S.FooterIconOne src={IMAGES.headerLogoOne} />
                    <S.FooterIconTwo src={IMAGES.footerIcon} />
                </S.FooterIconsContainer>
                <S.FooterText>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</S.FooterText>
                <S.FooterContacts>(219) 555-0114 or Proxy@gmail.com</S.FooterContacts>
            </S.FooterDivOne>
            <S.FooterDivTwo>
                <S.FooterMenu>
                {footerMenu.map(({ id, title }) => (
                    <S.FooterMenuTitle key={id}>{title}</S.FooterMenuTitle>
                ))}
                </S.FooterMenu>
            </S.FooterDivTwo>
        </S.FooterContainer>
    )
};

export default Footer;