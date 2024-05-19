// Файл styled.js
import styled from 'styled-components';

export const BookingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to bottom, #ffa500, #ffffff);
  padding: 20px;
  border-radius: 8px;
`;

export const TextSection = styled.div`
  width: 613px;
  height: 742px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  background-color: #000; // Черный фон
  color: #fff; // Белый текст
`;

export const ImageSection = styled.div`
  width: 613px;
  height: 742px;
  background-image: url('путь_к_вашему_изображению.jpg');
  background-size: cover;
  background-position: center;
`;

export const LearnMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #f90; // Оранжевый фон
  border: none;
  color: #000; // Черный текст
  cursor: pointer;

  &:hover {
    background-color: #fb0; // Светло-оранжевый фон при наведении
  }
`;
