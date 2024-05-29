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
  width: calc(100% - 240px);
  padding-inline: 120px;
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
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const SecondGymContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const PartyImg = styled.img`
  width: 50%;
  height: 400px;
  transition: 1s;
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const GymImg = styled.img`
  width: 40%;
  height: 400px;
  transition: 1s;
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const CasualImg = styled.img`
  width: 30%;
  height: 300px;
  transition: 1s;
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const FormalImg = styled.img`
  width: 60%;
  height: 300px;
  transition: 1s;
  cursor: pointer;
  
  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
