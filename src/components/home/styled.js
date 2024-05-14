import styled from "styled-components";

export const allCont = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const titleProject = styled.h1``;

export const contTodos = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  border: 2px solid #cde8e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const addButton = styled.button`
width: 100px;
height: 40px;
background-color: transparent;
color: white;
cursor: pointer;
border: 1,5px solid #CDE8E5;
border: none;
transition: 2s;

&:hover{
    border: 1px solid #CDE8E5;
    transition: 1.3s;
}
`

export const form = styled.form``

export const addTodoInput = styled.input`
width: 200px;
height: 40px;
background-color: transparent;
color: white;
border: none;
`;

export const Ul  = styled.ul`
width: 300px;
display: flex;
flex-direction: column;

`
