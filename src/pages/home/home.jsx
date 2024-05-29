import * as S from "./styled";
import Button from "../../commons/button";
import { IMAGES } from "../../assets/images";
import { footerMenu } from "./data";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.Section1>
        <S.Section1A>
          <S.Text1>
            Your Ultimate Online <S.Span>Grocery</S.Span>
          </S.Text1>
          <S.Text2>
            Experience grocery shopping and swift home delivery with our wide
            range of fresh produce and essentials
          </S.Text2>
          <Button children={"Learn More"} />
        </S.Section1A>
        <S.Section1B>
          <S.Image src={IMAGES.pear}></S.Image>
        </S.Section1B>
      </S.Section1>
      <S.Section2>
        <S.Section2a>
          <S.Images src={IMAGES.support}></S.Images>
          <S.Textes>Support 24 h</S.Textes>
          <S.Textes2>Dedicated support</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.vector}></S.Images>
          <S.Textes>Secure Payment</S.Textes>
          <S.Textes2>ensure your money is safe</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.refundable}></S.Images>
          <S.Textes>Refundable</S.Textes>
          <S.Textes2>Damage items can refund it</S.Textes2>
        </S.Section2a>
        <S.Section2a>
          <S.Images src={IMAGES.archive}></S.Images>
          <S.Textes>Free Shipping</S.Textes>
          <S.Textes2>Order over 40$</S.Textes2>
        </S.Section2a>
      </S.Section2>
      <S.Section3>
        <S.Section3A>
          <S.Section3A1>
            <S.RedApples src={IMAGES.redapple}></S.RedApples>
          </S.Section3A1>
          <S.Section3A2>
            <S.Text3>SUMMER SALE</S.Text3>
            <S.Text4>40%OFF</S.Text4>
            <S.Text5>Fresh Fruit %100</S.Text5>
            <Button children={"Shop Now >"} />
          </S.Section3A2>
        </S.Section3A>
        <S.Section3B>
          <S.Text6>Fresh Delivered Daily</S.Text6>
          <S.Cheese src={IMAGES.cheese}></S.Cheese>
        </S.Section3B>
      </S.Section3>
      <S.Section4>
        <S.Text7>Top Category</S.Text7>
        <S.Section4B>
          <S.Rectangle1>
            <S.Blackfruits src={IMAGES.blackfruits}></S.Blackfruits>
            <S.Txt1>Fruits</S.Txt1>
          </S.Rectangle1>
          <S.Rectangle2>
            <S.Vegetables src={IMAGES.vegetables}></S.Vegetables>
            <S.Txt1>Vegetable</S.Txt1>
          </S.Rectangle2>
          <S.Rectangle3>
            <S.Meat src={IMAGES.meat}></S.Meat>
            <S.Txt1>Meat</S.Txt1>
          </S.Rectangle3>
          <S.Rectangle4>
            <S.Snacks src={IMAGES.snacks}></S.Snacks>
            <S.Txt1>Snacks</S.Txt1>
          </S.Rectangle4>
          <S.Rectangle5>
            <S.Milk src={IMAGES.milk}></S.Milk>
            <S.Txt1>Milk</S.Txt1>
          </S.Rectangle5>
        </S.Section4B>
      </S.Section4>
      <S.Section5>
        <S.Section5General>
          <S.Section5a>
            <S.Fruits src={IMAGES.fruits}></S.Fruits>
          </S.Section5a>
          <S.Section5b>
            <S.Text8>ECO-Friendly</S.Text8>
            <S.Text9>
              Discover a vibrant array of locally sourced and eco-friendly
              products on our grocery web store, connecting you with sustainable
              choices that support both the community and the planet.
            </S.Text9>
            <Button children={"Learn More"} />
          </S.Section5b>
        </S.Section5General>
      </S.Section5>
      <S.Section6>
        <S.Text10>Sign up for new Customer, updates, surveys</S.Text10>
      </S.Section6>
      <S.Section7>
        <S.FooterMenuContainer>
          {footerMenu().map(({ id, title, items }) => (
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
