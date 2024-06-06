import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderCotainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;


export const Logo = styled.img`
width: 130px;
height: 46px;
gap: 0px;
opacity: 0px;

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
export const LinkToHome = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 122px;
height: 50px;
gap: 0px;
border-radius: 8px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
background: #0F2336;
`


