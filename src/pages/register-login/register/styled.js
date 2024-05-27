import styled from "styled-components";
import { IMAGES } from "../../../assets";

export const registerContainer = styled.div`
  width: 100%;
  min-height: 100vh;
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
export const titleRegister = styled.h3`
  font-weight: 400;
`;


export const formInputs = styled.form`
  width: 460px;
  height: 600px;
  background-color: transparent;
  backdrop-filter: blur(50px);
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;


export const label = styled.label`
  position: relative;
  top:10px ;
`;


export const  errorMessage = styled.p`
position: relative;
bottom: 10px;
height: 16px;

`