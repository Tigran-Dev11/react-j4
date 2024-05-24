import styled from 'styled-components';
import carImage from '../../assets/car-mersedec.png';

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px; 
`;

export const ImageSection = styled.div`
width: 909px;
height: 545px;
background-image: url(${carImage});
background-size: cover;
background-position: center;
position: absolute;
top: 104px;
left: 995px;
`;

export const TextSection = styled.div`
  width: 613px;
  height: 742px;
  background-color: black; 
  color: white; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-right: auto; 
`;




export const ExploreButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: orange; 
  color: black; 
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkorange; 
  }
`;
