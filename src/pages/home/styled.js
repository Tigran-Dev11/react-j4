import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${COLORS.red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1``;

export const Section1 = styled.div``;

export const Inp = styled.input``;

export const Btn = styled.button``;

export const Section2 = styled.div`
  width: 500px;
  max-height: 600px;
  border: 1px solid white;
  overflow-y: auto;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  margin: 10px 0;
  padding: 10px;
`;

export const Section3 = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span``;

export const TodoList = styled.div`
  width: 500px;
  max-height: 600px;
  overflow: auto;
  border: 1px solid white;
`;

export const TodoForm = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    gap: 20px;
  }

  input {
    width: 300px;
    height: 30px;
    border-radius: 8px;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

export const TodoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse; 
  justify-content: center;
  align-items: center;
  gap: 20px;

  .todo {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      justify-content: space-between;
      width: 100%;

      input[type="checkbox"] {
        order: 2; 
      }

      p {
        order: 1; 
      }
    }

    .buttons {
      display: flex;
      gap: 10px;

      button {
        order: 3; 
      }
    }
  }
`;
