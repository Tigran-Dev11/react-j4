import styled from 'styled-components'
import { COLORS } from '../../assets/colors'



export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${COLORS.red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const TodoList = styled.div`
  width: 500px;
  max-height: 600px;
  overflow: auto;
  border: 1px solid white;
`

export const TodoForm = styled.div`
width: 100%;
height: 100px;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

form{
  display: flex;
  gap: 20px;
}

input{
  width: 300px;
  height: 30px;
  border-radius: 8px;
}

button{
  width: 100px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
`

export const TodoItem = styled.div`
width: 100%;
border: 1px solid white;
display: flex;
flex-direction: column-reverse; 
justify-content: center;
align-items: center;
gap: 20px;

.todo{
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type="checkbox"] {
    order: 1;
  }

  p {
    order: 2;
  }

  .buttons {
    display: flex;
    gap: 10px;

    button {
      order: 3;
    }
    
  }

`