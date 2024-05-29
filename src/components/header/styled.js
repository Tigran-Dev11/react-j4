import styled from "styled-components";
import { COLORS } from "../../assets/colors";


export const HeaderContainer = styled.div`
width:100%;
height:100px;
background-color: ${COLORS.cream};
border-bottom:solid 1px;

`

export const TopMenuContainer = styled.div`
background-color:${COLORS.brown};
height:40px;
display:flex;
justify-content:center;
align-items:center;
`
export const TextContainer = styled.div`
width: 200px;
display: flex;
justify-content: space-between;
`


export const Text = styled.p`
color:${COLORS.white};
`

export const MenuContainer = styled.div`
display:flex;
justify-content:space-evenly;
height:60px;

`


export const MenuItemsContainer = styled.ul`
width:1000px;
height:60px;
display:flex;
justify-content: space-evenly;
align-items:center;

`
export const MenuItems = styled.li`
list-style:none;
`
export const MenuItempath = styled.a`
color:black;
text-decoration:none;
`
export const Logo = styled.img`
width:90px;
height:90px;
`
export const LogoContainer = styled.div`
width: 80px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`


export const ImageContainer = styled.img`
width:18px;
height:18px;
`


export const IconsContainer = styled.div`
width:100px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
`
