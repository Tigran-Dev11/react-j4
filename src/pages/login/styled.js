import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 90px;
`;

export const PageTitle = styled.h1`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  font-family: "montserrat";
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const LoginButton = styled.button`
  width: auto;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  color: ${COLORS.black};
  font-family: "montserrat";
  box-shadow: 2px 4px 4px 2px ${COLORS.black};
  cursor: pointer;
`;
