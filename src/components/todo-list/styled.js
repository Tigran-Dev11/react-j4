import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 729px;
  background: linear-gradient(
    180deg,
    ${COLORS.white} 6.5%,
    ${COLORS.yellow} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  color: ${COLORS.black};
  font-family: "montserrat";
  padding-top: 40px;
`;

export const Section1 = styled.div`
  display: flex;
  gap: 30px;
`;

export const Section2 = styled.div``;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  gap: 30px;
`;

export const TodoItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Span = styled.span`
  margin-right: 10px;
  font-size: 40px;
  color: ${COLORS.black};
  font-family: 'montserrat';
`;

export const Checkbox = styled.input`
width: 30px;
height: 30px;
box-shadow: 2px 4px 4px 2px ${COLORS.black};
border: none;
`