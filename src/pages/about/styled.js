import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const Section5 = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section5General = styled.div`
  width: 100%;
  height: 620px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
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
