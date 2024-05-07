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
  height: 400px;
  border: 1px solid white;
`

export const TodoForm = styled.div`
widows: 100%;
height: 100px;
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
}
`

export const TodoItem = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

.initialTodos{
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .todoItemButtons{
    display:flex;
    gap:10px;

    button{
      cursor: pointer;
    }
  }
  
}
`