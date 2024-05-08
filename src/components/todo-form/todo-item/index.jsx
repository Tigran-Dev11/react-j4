import { initialTodos } from "../../../constant/index.js";
import * as S from "./styled.js";
import { useState } from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const [todos, setTodos] = useState([initialTodos]);

  const changeStatus = (todos) => {
    console.log(todos.name);

    todo.status = true;
    if (todo.status) console.log();
  };

  return (
    <S.TodoContainer>
      <input type="checkbox" onChange={() => changeStatus(todo.id)} />
      <S.TodoTask>{todo.name}</S.TodoTask>
      <S.SubmitBtn onClick={() => deleteTodo(todo.id)}>Delete</S.SubmitBtn>
      <S.SubmitBtn>Edit</S.SubmitBtn>
    </S.TodoContainer>
  );
};

export default TodoItem;
