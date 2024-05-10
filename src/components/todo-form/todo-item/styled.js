import styled from "styled-components";
export const TodoContainer = styled.div`
    width: 300px;
    height: 50px;
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const TodoTask = styled.p`
        width: 150px;
        height: 28px;
        color: black;
       &.status{
        text-decoration: line-through;
       }
    `;
    export const SubmitBtn = styled.button`
        width: 50px;
        height: 30px;
        background-color: darkblue;
        color: white;
    `;
    