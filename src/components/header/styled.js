import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import { NavLink } from "react-router-dom";
import { BREAKPOINTS } from "../../assets/breakpoints";
import { IMAGES } from "../../assets";

export const HeaderCont = styled.header`
  width: calc(100% - 120px);
  height: 120px;
  padding-inline: 60px;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: fixed;
  z-index: 90;
  top: 38px;
`;
export const titleShop = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  cursor: pointer;
`;
export const itemContainer = styled.ul`
  gap: 20px;
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.black};

  @media ${BREAKPOINTS.lg} {
    display: none;
    
    }
`;
export const component = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  background-color: ${COLORS.white};
`;
export const basketUser = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media ${BREAKPOINTS.lg} {
    width: 20px;
    height: 20px;
  }
`;
export const userProfile = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media ${BREAKPOINTS.lg} {
    width: 20px;
    height: 20px;
  }
`;
export const searchIcon = styled.img`
  position: absolute;
  margin-left: 10px;
  cursor: pointer;

  @media ${BREAKPOINTS.lg} {
     width: 20px;
     height: 20px;
    }
`;
export const searchShoes = styled.input`
  width: 670px;
  height: 48px;
  opacity: 0px;
  border: none;
  background: #f0f0f0;
  padding-inline: 40px;
  border-radius: 30px;
  font-size: 18px;

  @media ${BREAKPOINTS.lg} {
     width: 300px;
     height: 30px;
    }
`;
export const searchContainer = styled.div`
  display: flex;
  align-items: center;
`;



export const menuList = styled.img`
width: 60px;
height: 40px;
display:none;
 cursor: pointer;
@media ${BREAKPOINTS.lg} {
     display: block;
     
    }


`

export const menuContainer = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20px;
`

export const languageSelect = styled.select``

export const languageOptionEng = styled.option``
export const languageOptionRus = styled.option``