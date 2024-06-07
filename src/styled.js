import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
`;