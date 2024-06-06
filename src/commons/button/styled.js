import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const Button = styled.button`
  color: ${COLORS.white};
  width: 120px;
  height: 50px;
  border: none;
  padding: 10px;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  font-family: "montserrat";
  box-shadow: 2px 4px 4px 2px ${COLORS.black};
  cursor: pointer;
`;