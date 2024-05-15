import { todoActions } from '../../libs/redux/todo-slice/todo-slice.js';
import * as S from './styled.js'
import React from 'react';


const TodoItem = ({ todo }) => {
  const { completed, title, id} = todo;

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id))
  };

  const isCompleted = (id) => {
    dispatch(todoActions.isCompleted(id))
  };

  const editTodo = (id) => {
    dispatch(todoActions.editTodo(id))
  }


    return (
      <S.Section>
      <S.Li >
        <S.Inp type= "checkbox" onClick={() => isCompleted(todo.id)}></S.Inp>
        <S.P>{title}</S.P>
        <S.Div>
          <S.Btn onClick={() => editTodo(todo.id)}>edit</S.Btn>
          <S.Btn onClick={() => deleteTodo(todo.id)}>delete</S.Btn>
        </S.Div>
      </S.Li>
      </S.Section>
    );
  };
  
  export default TodoItem;