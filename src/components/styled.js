import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { BREAKPOINTS } from "../assets/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${BREAKPOINTS.lg} {
     height: 120px; 
  }

  @media ${BREAKPOINTS.md} {
     height: 100px;
  }

  @media ${BREAKPOINTS.sm} {
     height: 80px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: ${COLORS.black};
  font-size: 20px;
  background-color: ${COLORS.green}; 
  border: none; 
  border-radius: 5px; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: ${COLORS.blue}; 
  }
`;
