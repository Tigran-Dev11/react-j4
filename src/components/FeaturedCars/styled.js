
import styled from 'styled-components';


export const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white; 
`;

export const CarCard = styled.div`
  width: 300px; 
  margin: 20px;
  background-color: #f0f0f0; 
  border-radius: 10px;
  overflow: hidden;
`;

export const CarImage = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${props => props.carImage});
  background-size: cover;
  background-position: center;
`;

export const CarDetails = styled.div`
  padding: 15px;
  color: black; 
`;

export const BookButton = styled.button`
  padding: 10px 20px;
  background-color: orange; 
  color: white; 
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkorange; 
  }
`;
