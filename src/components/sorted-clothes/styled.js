import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const Container = styled.div`
  width: 100%;

  min-height: 100vh;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.div`
  width: calc(100% - 120px);
  padding-inline:60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 800px;
  background: #f0f0f0;
  border-radius: 40px;
`;

export const ItemTitle = styled.h1``;

export const FirstCasualContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const SecondGymContainer = styled.div``;

export const PartyImg = styled.img``;
export const GymImg = styled.img``;
export const CasualImg = styled.img``;
export const FormalImg = styled.img``;
