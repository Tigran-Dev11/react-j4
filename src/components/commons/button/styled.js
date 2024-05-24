import styled from "styled-components";
import { COLORS } from "../../../assets/colors";

export const button = styled.button`
  cursor: pointer;
  width: Fixed (230px) px;
  height: Fixed (52px) px;
  padding: 16px 54px 16px 54px;
  border-radius: 62px;
  border: none;
  color: ${COLORS.white};
  opacity: 0px;
  background-color: ${COLORS.black};
  transition: 0.6s;

  &:hover {
    transform: scaleX(1.1);
    transition: 0.6s;
  }
`;
