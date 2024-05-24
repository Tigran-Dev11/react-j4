import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: auto;
  margin: auto;
  padding: 20px;
  background-color: #FFE4C6; 
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: calc(33.333% - 20px); 
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  width: calc(33.333% - 20px); 
  &:hover {
    background-color: darkorange;
  }
`;
