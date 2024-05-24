import styled from 'styled-components';
import carImage from '../../assets/car-lamborgini.png'; 

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: white; 
`;

export const TextBlock = styled.div`
  flex: 1;
  padding: 20px;
  color: black; 
  background-color: white; 
`;

export const CarImage = styled.div`
  flex: 1;
  width: 548px; 
  height: 354px; 
  background-image: url(${carImage});
  background-size: cover;
  background-position: center;
  border-radius: 4px; 
`;

export const ReadMoreButton = styled.button`
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
