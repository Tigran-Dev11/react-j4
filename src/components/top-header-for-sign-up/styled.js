import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const header = styled.div`
width: 100%;
height: 38px;
background-color:${COLORS.black};
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index:90;
top: 0px;
`
export const aboutSignUp = styled.p`
height: auto;
color: white;
`

export const linkToLogin = styled.a`
text-decoration: underline;
cursor: pointer;
`