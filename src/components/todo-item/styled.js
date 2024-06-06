import styled from "styled-components";


export const Container = styled.div`
width: 200px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
export const ItemContainer = styled.div`
display: flex;
`
export const ItemComplet = styled.input``


export const ItemText = styled.p`
&.completed{

text-decoration: line-through;

}
`

export const ItemBtn = styled.button`
&.edith{
    display: none;
}
`


export const TodoInput = styled.input``

export const SubmitBtn = styled.button``
