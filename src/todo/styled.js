import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const title = styled.h1``;

export const addTasksection = styled.div`
  display: flex;
  gap: 20px;
`;

export const endprocessTodo = styled.div`
  display: "flex";
  align-items: "center";
  width: 600px;
  gap: 100px;
  justify-content: space-between;
`;

export const addedTodo = styled.div`
  margin-left: 300px;
`;
export const ul = styled.ul``;

export const topInput = styled.input``;

export const topAddButton = styled.button`
  width: 80px;
  height: 40px;
`;
export const li = styled.li`
  list-style: none;
`;
export const span = styled.span``;

export const checkboxInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #f3f3f4;
  color: #0d0c22;
`;

export const editButton = styled.button`
  border-radius: 4px;
  width: 100px;
  height: 48px;
  border: 1px solid transparent;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  color: #ede5ff;
`;

export const DeleteButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  color: #ede5ff;
`;
