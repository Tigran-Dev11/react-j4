import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import { NavLink } from "react-router-dom";

export const GeneralSection = styled.div`
  width: 100%;
  min-height: 620px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
`

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-top: 40px;
  color: ${COLORS.red};
`;
export const MenuItem = styled.li`
  list-style: none;
  font-size: 17px;
  font-weight: 500;
  font-family: "montserrat";
`;

export const LinkToHome = styled(NavLink)`
  color: ${COLORS.black};
  text-decoration: none;
  `;