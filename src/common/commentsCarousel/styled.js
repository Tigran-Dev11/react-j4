import styled from "styled-components";


export const SliderContainer = styled.div`
width: calc(96% - 60px);
padding-inline: 30px;
height: auto;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
`

export const CarouselItem = styled.div`
width: 200px;
height: 40px;
display: flex;
align-items: center;
row-gap: 40px;
`



export const UlContainer = styled.ul`

  width: 100%;
  height: 280px;
  padding-block: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const nameAndSuccessCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
export const li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  padding: 20px;
  height: 260px;
  border:1px solid gray;
  border-radius: 12px;
`;
export const userName = styled.h4``;
export const fiveStars = styled.img``;
export const approvedUserIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const descriptionUser = styled.p``;
