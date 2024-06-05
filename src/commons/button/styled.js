import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const Button = styled.button`
  color: white;
  width: 240px;
  height: 70px;
  margin-top: 30px;
  border: none;
  padding: 10px;
  background-color: transparent;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  font-family: "montserrat";
  box-shadow: 2px 4px 4px 2px ${COLORS.black};
  cursor: pointer;
`;
