import styled from "styled-components";
import { IMAGES } from "../../../assets";

export const registerContainer = styled.div`
  width: 100%;
  height: 100vh;
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

export const registerCardCont = styled.div`
  width: 460px;
  height: 700px;
  background-color: transparent;
  backdrop-filter: blur(50px);
  border: 2px solid white;
  margin-top: 80px;
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
  width: 100%;
  height: 800px;
  cursor: pointer;
  color: black;
  border: none;
  background-color: #31363f;
  font-size: 18px;
  border-radius: 20px;
`;

export const label = styled.label`
  position: relative;
  top: 40px;
`;
export const linkToRegister = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin-left: 120px;
  color: black;
  opacity: 1.2;
`;
