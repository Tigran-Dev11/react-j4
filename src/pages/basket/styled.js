import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const BasketContainer = styled.div`
  widows: 100%;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
`;

export const BasketPageTitle = styled.h1`
  font-family: "montserrat";
  font-weight: 500;
`;

export const ButtonDelivery = styled.button`
  background: transparent;
  width: 140px;
  height: 40px;
  border-radius: 8px;
  font-family: "montserrat";
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
  cursor: pointer;
`;
