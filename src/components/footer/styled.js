import styled from "styled-components"
import { COLORS } from "../../assets/colors"

export const FooterContainer = styled.div`
width:100%;
height:400px;
background-color: ${COLORS.darkGrey};
border-bottom:solid 1px;
display: flex;
justify-content: space-evenly ;
align-items: center;
margin:0;
padding:0;
`

export const MapContainer = styled.div`
width: 300px;
height:300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const MapTitle = styled.h1`
color: ${COLORS.white};
font-size: 20px;
`

export const MenusContainer = styled.div`
width: 800px;
display: flex;
justify-content: space-between;

`
export const MenuItemsContainer = styled.ul`
width:250px;
height:300px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;


`
export const MenuItems = styled.li`
color:${COLORS.white};

list-style:none;
font-size: 20px;


`
export const MenuItempath = styled.a`
color:${COLORS.white};
text-decoration:none;
`

export const SocialPages =styled.ul`
width:250px;
height:300px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`
export const SocialItems = styled.li`
list-style:none;

`
export const SocialItemsPath = styled.a`
text-decoration:none;
color: ${COLORS.white};

`
export const SocialImg = styled.img`
`
export const SocialIconsContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-evenly;
`