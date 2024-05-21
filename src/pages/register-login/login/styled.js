import styled from "styled-components";
import { IMAGES } from "../../../assets";

export const loginContainer = styled.div`
  width: 100%;
  min-height:100vh;
  position: relative;
  top: 158px;
  background-image: url(${IMAGES.mainRectangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const titleLogin = styled.h3`
  font-weight: 400;
`;

export const loginCardCont = styled.div`
  width: 460px;
  min-height: 640px;
  padding-block: 20px;
  background-color: transparent;
  backdrop-filter: blur(50px);
  border: 2px solid white;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const formInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
  height: 600px;
`;
export const submitButton = styled.button`
width:100%;
height: 40px;
cursor: pointer;
color:black;
box-sizing: border-box;
box-shadow: none;
border: none;
background-color: #31363F;
font-size: 16px;
border-radius: 20px;
`

export const label = styled.label`
position: relative;
top: 40px;

`
export const linkToRegister = styled.a`
cursor: pointer;
text-decoration: underline;
margin-left: 60px;
color: black;
opacity: 1.2;
`