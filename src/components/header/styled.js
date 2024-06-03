import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import { NavLink } from "react-router-dom";

export const MenuHeader = styled.div`
  background-color: ${COLORS.white};
  padding-inline: 60px;
  width: calc(100% - 120px);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Logo = styled.img`
  width: 350px;
  height: 120px;
  margin-left: 40px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
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

export const languageSelect = styled.select`
  margin-left: 20px;
  font-family: "montserrat";
  border-radius: 6px;
  padding: 6px;
  font-weight: 500;
`;

export const languageOptionEng = styled.option``;
export const languageOptionRus = styled.option``;
