import styled from "styled-components";

export const TodoTaskContainer = styled.div`
width:400px;
height:300px;
border:solid 1px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;

`


export const TodoTask = styled.div`
width:300px;
height:30px;
display:flex;
gap:6px;
`

export const Text = styled.p`
width:200px;
height: 20px;
background-color:lightblue;
border-radius:4px;
padding:5px 10px;
&.completed{

text-decoration: line-through;

}

`
export const Input = styled.input`
border-radius:2px;

`