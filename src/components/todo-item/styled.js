import styled from "styled-components";


export const Container = styled.div`
width: 350px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;


`

export const CheckInput = styled.input`
`
export const ItemContainer = styled.div`
width: 350px;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const ItemText = styled.p`
width: 250px;
height: 30px;
&.completed{
    text-decoration: line-through;
}
`
export const DeleteBtn = styled.button`
width: 60px;
height: 30px;
border-radius:8px;
background-color: aliceblue;
`
export const EditBtn = styled.button`
width: 60px;
height: 30px;
border-radius:8px;
background-color: aliceblue;


`
