import { initialTodos } from "../../../constant/index.js";
import * as S from "./styled.js";
import { useState } from "react";
import Input from "../../../commons/input/index.jsx";
import "./style.scss";
import EditForm from "../edith-form/index.jsx";

const TodoItem = ({ deleteTodo, changeStatus, edithTodo }) => {
  const [todos, setTodos] = useState([initialTodos]);

  return (
    <S.TodoContainer>
      {todos.map(({ todo, index }) =>
        todo.isEdith ? (
          <EditForm />
        ) : (
          ((<Input type="checkbox" onChange={() => changeStatus(todo.id)} />),
          (
            <S.TodoTask className={`${todo.status ? "status" : ""}`}>
              {todo.name}
            </S.TodoTask>
          ),
          (
            <S.SubmitBtn onClick={() => deleteTodo(todo.id)}>
              Delete
            </S.SubmitBtn>
          ),
          (<S.SubmitBtn onClick={() => edithTodo(todo.id)}>Edit</S.SubmitBtn>))
        )
      )}
    </S.TodoContainer>
  );
};

export default TodoItem;
