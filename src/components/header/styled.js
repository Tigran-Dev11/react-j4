import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import { BREAKPOINTS } from "../../assets/breakpoints";

export const HeaderContainer = styled.div`
width:100%;
height:100px;
background-color: ${COLORS.cream};
border-bottom:solid 1px;
position:relative;
`

export const TopMenuContainer = styled.div`
background-color:${COLORS.brown};
height:40px;
display:flex;
justify-content:center;
align-items:center;
`
export const TextContainer = styled.div`
width: 300px;
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
@media ${BREAKPOINTS.lg} {
    width: 700px;
      }
      @media ${BREAKPOINTS.md} {
    display: none;
      }
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
cursor: pointer;

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
cursor: pointer;
`


export const IconsContainer = styled.div`
width:100px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
@media ${BREAKPOINTS.md} {
    width: 200px;
      }
      @media ${BREAKPOINTS.sm} {
    width: 120px;
      }
`
export const LanguageConatainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const LanguageSelect = styled.select`
height:20px;
border:none;
background-color: ${COLORS.brown};
color: ${COLORS.white};
cursor: pointer;

`

export const LanguageOptionEng = styled.option`
cursor: pointer;
`
export const LanguageOptionArm = styled.option`
cursor: pointer;
`

export const BurgerContainer = styled.div`
display: none;
align-items: center;
justify-content: center;
@media ${BREAKPOINTS.md} {
    display:flex;
      }

`

export const BurgerMenu = styled.img`
border-radius: 8px;
width: 30px;
height: 30px;
`
export const ToggleMenu = styled.ul`
width: 100px;
z-index: 11;
background-color: ${COLORS.cream};
display: none;
flex-direction: column;
align-items: center;
justify-content: center;
position:absolute;
cursor:pointer;
margin-top: 61px;
left: 255px;
`
export const ToggleItem =  styled.li`
width: 100px;
height: 40px;
border:solid 1px;
background-color: ${COLORS.cream};
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const TogglePath = styled.a`
background-color: ${COLORS.cream};
color:${COLORS.brown};
text-decoration:none;




`