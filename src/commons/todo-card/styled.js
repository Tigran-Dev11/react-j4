import styled from "styled-components";

export const todoCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TodoCheckInput = styled.input`
  width: 20px;
  height: 20px;
`;
export const titleTodo = styled.p``;
export const buttonsCont = styled.div`
width: 140px;
display: flex;
justify-content: space-between;
`;
export const editButton = styled.button`
  width: 60px;
  height:30px;
  border-radius:3px;
  border: 1.5px solid white;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
export const deleteButton = styled.button`
  width: 60px;
  height:30px;
  border-radius:3px;
  border: 1.5px solid white;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;
