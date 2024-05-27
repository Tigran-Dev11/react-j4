import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const General = styled.div`
  width: 100%;
  height: 620px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
`;

export const Title = styled.p`
padding-top: 40px;
display: flex;
justify-content: center;
text-align: center;
font-size: 60px;
font-family: "montserrat";
`