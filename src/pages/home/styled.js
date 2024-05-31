import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const HomeContainer = styled.div``;

export const Section1 = styled.div`
  width: 100%;
  height: 640px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
  display: flex;
  justify-content: space-around;
`;

export const Section1A = styled.div``;

export const Text1 = styled.p`
  width: 504px;
  padding-top: 198px;
  font-family: Palanquin;
  font-size: 70px;
  font-weight: 500;
  line-height: 70px;
  text-align: left;
`;
export const Span = styled.span`
  font-family: Palanquin;
  font-size: 70px;
  font-weight: 500;
  line-height: 70px;
  text-align: left;
  color: ${COLORS.green};
`;
export const Text2 = styled.p`
  width: 504px;
  margin-top: 20px;
  font-family: Open Sans;
  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
  text-align: left;
`;

export const Section1B = styled.div``;

export const Image = styled.img`
  width: 605px;
  height: 500px;
  margin-top: 70px;
`;

export const Section2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-top: 30px;
`;

export const Section2a = styled.div`
  width: 25%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Images = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Textes = styled.p`
  font-family: "montserrat";
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
`;

export const Textes2 = styled.p`
  font-family: "montserrat";
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  text-align: left;
`;

export const Section3 = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
`;

export const Section3A = styled.div`
  width: 760px;
  height: 440px;
  background: ${COLORS.green2};
  margin-left: 120px;
  margin-top: 80px;
  display: flex;
  box-shadow: 0px 4px 10px 0px #00000040;
  border: 1px solid;
  border-image-source: linear-gradient(
    180deg,
    ${COLORS.black} 0%,
    ${COLORS.black} 52.5%,
    ${COLORS.black} 100%
  );
`;

export const Section3A1 = styled.div``;

export const RedApples = styled.img`
  width: 440px;
  height: 270px;
  padding-top: 80px;
`;

export const Section3A2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
`;

export const Text3 = styled.p`
  font-family: Open Sans;
  font-size: 25px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
`;

export const Text4 = styled.p`
  color: ${COLORS.green3};
  font-family: Palanquin;
  font-size: 40px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;

export const Text5 = styled.p`
  font-family: Palanquin;
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  text-align: center;
`;

export const Section3B = styled.div`
  width: 400px;
  background: ${COLORS.yellow};
  height: 440px;
  margin-top: 80px;
  margin-left: 80px;
  box-shadow: 0px 4px 10px 0px ${COLORS.black};
`;

export const Text6 = styled.p`
  font-family: Palanquin;
  font-size: 64px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  margin-top: 20px;
`;

export const Cheese = styled.img`
  width: 400px;
  height: 250px;
  margin-top: 20px;
`;

export const Section4 = styled.div`
  width: 100%;
  height: 400px;
`;

export const Text7 = styled.p`
  font-family: "montserrat";
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  margin-left: 120px;
  margin-top: 20px;
  text-align: left;
`;

export const Section4B = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

export const Rectangle1 = styled.div`
  width: 200px;
  height: 200px;
  background: ${COLORS.fleshcolored};
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Blackfruits = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Txt1 = styled.p`
  font-family: "montserrat";
  font-size: 26px;
  font-weight: 500;
  line-height: 31.2px;
  text-align: center;
  margin-top: 26px;
`;

export const Rectangle2 = styled.div`
  width: 200px;
  height: 200px;
  background: ${COLORS.fleshcolored};
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Vegetables = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Rectangle3 = styled.div`
  width: 200px;
  height: 200px;
  background: ${COLORS.fleshcolored};
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Meat = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Rectangle4 = styled.div`
  width: 200px;
  height: 200px;
  background: ${COLORS.fleshcolored};
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Snacks = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Rectangle5 = styled.div`
  width: 200px;
  height: 200px;
  background: ${COLORS.fleshcolored};
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Milk = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export const Section5 = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section5General = styled.div`
  width: 1200px;
  height: 500px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
  border-radius: 6px;
  display: flex;
`;

export const Section5a = styled.div``;

export const Fruits = styled.img`
  width: 420px;
  height: 400px;
  margin-left: 40px;
  margin-top: 40px;
`;

export const Section5b = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

export const Text8 = styled.p`
  font-family: Palanquin;
  font-size: 60px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 70px;
`;

export const Text9 = styled.p`
  font-family: Open Sans;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  width: 710px;
  height: 160px;
  margin-top: 30px;
`;

export const Section6 = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.green2};
`;

export const Text10 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "montserrat";
  font-size: 24px;
  padding-top: 40px;
`;

export const Section7 = styled.div`
  width: 100%;
  height: 400px;
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 90px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterMenuTitle = styled.p`
  font-size: 36px;
  font-family: "montserrat";
`;

export const FooterMenuList = styled.p`
  color: ${COLORS.black};
  font-family: "montserrat";
  cursor: pointer;
`;
