import styled from 'styled-components'
import { COLORS } from '../../assets/colors'



export const HomeContainer  = styled.div`
  width: 100%;
  height: 100vh;
  background: ${COLORS.red};
`


export const Text  = styled.p`
  font-size: 32px;
  color: ${COLORS.black};
  font-weight: 600;
`

export const TodosContainer = styled.div`
widows: 300px;
height: 400px;
border: 1px solid;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const TodoTitle = styled.h1`
font-size: 32px;
`