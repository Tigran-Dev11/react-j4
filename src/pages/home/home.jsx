import * as S from "./styled";
import Button from "../../commons/button";
import { IMAGES } from "../../assets/images";
import { footerMenu } from "./data";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <S.HomeContainer>
      <S.Section1>
        <S.Section1A>
          <S.Text1>
            {t("section1.text1")} <S.Span>{t("section1.text2")}</S.Span>
          </S.Text1>
          <S.Text2>{t("section1.text3")}</S.Text2>
          <Button children={t("section1.text4")} />
        </S.Section1A>
        <S.Section1B>
          <S.Image src={IMAGES.pear}></S.Image>
        </S.Section1B>
      </S.Section1>
      <S.Section2>
        <S.Section2a>
          <S.Images src={IMAGES.support}></S.Images>
          <S.Textes>{t("section2.text1")}</S.Textes>
          <S.Textes2>{t("section2.text2")}</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.vector}></S.Images>
          <S.Textes>{t("section2.text3")}</S.Textes>
          <S.Textes2>{t("section2.text4")}</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.refundable}></S.Images>
          <S.Textes>{t("section2.text5")}</S.Textes>
          <S.Textes2>{t("section2.text6")}</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.archive}></S.Images>
          <S.Textes>{t("section2.text7")}</S.Textes>
          <S.Textes2>{t("section2.text8")}</S.Textes2>
        </S.Section2a>
      </S.Section2>
      <S.Section3>
        <S.Section3A>
          <S.Section3A1>
            <S.RedApples src={IMAGES.redapple}></S.RedApples>
          </S.Section3A1>
          <S.Section3A2>
            <S.Text3>{t("section3.text1")}</S.Text3>
            <S.Text4>{t("section3.text2")}</S.Text4>
            <S.Text5>{t("section3.text3")}</S.Text5>
            <Button children={t("section3.text4")} />
          </S.Section3A2>
        </S.Section3A>
        <S.Section3B>
          <S.Text6>{t("section3.text5")}</S.Text6>
          <S.Cheese src={IMAGES.cheese}></S.Cheese>
        </S.Section3B>
      </S.Section3>
      <S.Section4>
        <S.Text7>{t("section4.text1")}</S.Text7>
        <S.Section4B>
          <S.Rectangle1>
            <S.Blackfruits src={IMAGES.blackfruits}></S.Blackfruits>
            <S.Txt1>{t("section4.text2")}</S.Txt1>
          </S.Rectangle1>
          <S.Rectangle2>
            <S.Vegetables src={IMAGES.vegetables}></S.Vegetables>
            <S.Txt1>{t("section4.text3")}</S.Txt1>
          </S.Rectangle2>
          <S.Rectangle3>
            <S.Meat src={IMAGES.meat}></S.Meat>
            <S.Txt1>{t("section4.text4")}</S.Txt1>
          </S.Rectangle3>
          <S.Rectangle4>
            <S.Snacks src={IMAGES.snacks}></S.Snacks>
            <S.Txt1>{t("section4.text5")}</S.Txt1>
          </S.Rectangle4>
          <S.Rectangle5>
            <S.Milk src={IMAGES.milk}></S.Milk>
            <S.Txt1>{t("section4.text6")}</S.Txt1>
          </S.Rectangle5>
        </S.Section4B>
      </S.Section4>
      <S.Section5>
        <S.Section5General>
          <S.Section5a>
            <S.Fruits src={IMAGES.fruits}></S.Fruits>
          </S.Section5a>
          <S.Section5b>
            <S.Text8>{t("section5.text1")}</S.Text8>
            <S.Text9>{t("section5.text2")}</S.Text9>
            <Button children={t("section5.text3")} />
          </S.Section5b>
        </S.Section5General>
      </S.Section5>
      <S.Section6>
        <S.Text10>{t("section6.text1")}</S.Text10>
      </S.Section6>
      <S.Section7>
        <S.FooterMenuContainer>
          {footerMenu(t).map(({ id, title, items }) => (
            <S.FooterMenu key={id}>
              <S.FooterMenuTitle>{title}</S.FooterMenuTitle>
              {items.map(({ name }) => (
                <S.FooterMenuList key={name}>{name}</S.FooterMenuList>
              ))}
            </S.FooterMenu>
          ))}
        </S.FooterMenuContainer>
      </S.Section7>
    </S.HomeContainer>
  );
};

export default Home;
