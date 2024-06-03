import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets";

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

export const PartyBlock = styled.div`
  width: 50%;
  height: 400px;
  transition: 1s;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  border-radius: 14px;
  background-repeat: no-repeat;
  background-image:url(${IMAGES.Party}); 

  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const GymBlock  = styled.div`
  width: 40%;
  height: 400px;
  transition: 1s;
  cursor: pointer;
  border-radius: 14px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url(${IMAGES.Gym}); 
  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const CasualBlock  = styled.div`
  width: 30%;
  height: 300px;
  transition: 1s;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 14px;
  background-image: url(${IMAGES.Casual});
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const FormalBlock = styled.div`
  width: 60%;
  height: 300px;
  transition: 1s;
  border-radius: 14px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url(${IMAGES.Formal}); 
  cursor: pointer;
  
  &&:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;

export const title = styled.h1``