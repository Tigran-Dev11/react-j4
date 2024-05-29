import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const GeneralSection = styled.div`
    width: 100%;
    height: 620px;
    background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
`

export const Title = styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
font-family: "montserrat";
`