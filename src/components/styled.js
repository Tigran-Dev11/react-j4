import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { BREAKPOINTS } from "../assets/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ color }) => color};

  @media ${BREAKPOINTS.lg} {
     height: 100px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: ${COLORS.black};
  font-size: 20px;
`;
