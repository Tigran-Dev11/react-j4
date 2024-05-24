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
`;
export const MenuItem = styled.li`
  list-style: none;
  font-size: 17px;
  font-weight: 500;
  font-family: "montserrat";
`;
export const A = styled.a`
  color: ${COLORS.black};
  text-decoration: none;
`;
export const Input = styled.input`
  border: 1px solid ${COLORS.black};
  width: 230px;
  height: 40px;
  padding-inline: 12px;
  margin-left: 10px;
`;
export const LinkToHome = styled(NavLink)``;
