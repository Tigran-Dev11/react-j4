
import styled from 'styled-components';
import jeepImage from './../assets/jeep.png';
import ferrariImage from '../assets/ferrari.png';
import fiatImage from '../../assets/mini.png';

export const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white; // Белый фон для всего контейнера
`;

export const CarCard = styled.div`
  width: 300px; // Или другой размер в зависимости от вашего дизайна
  margin: 20px;
  background-color: #f0f0f0; // Светлый фон для карточки
  border-radius: 10px;
  overflow: hidden;
`;

export const CarImage = styled.div`
  width: 100%;
  height: 200px; // Высота изображения
  background-image: url(${props => props.carImage});
  background-size: cover;
  background-position: center;
`;

export const CarDetails = styled.div`
  padding: 15px;
  color: black; // Черный текст
`;

export const BookButton = styled.button`
  padding: 10px 20px;
  background-color: orange; // Фон кнопки
  color: white; // Цвет текста кнопки
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkorange; // Фон кнопки при наведении
  }
`;
