import * as S from "./styled.js";
import Input from "../../../commons/input/index.jsx";
import "./style.scss";
import EditForm from "../edith-form/index.jsx";

const TodoItem = ({ todo, deleteTodo, changeStatus, edithTodo }) => {
  return (
    <S.TodoContainer>
      {todo.isEdith ? (
        <EditForm />
      ) : (
        ((<Input type="checkbox" onChange={() => changeStatus(todo.id)} />),
        (
          <S.TodoTask className={`${todo.status ? "status" : ""}`}>
            {todo.name}
          </S.TodoTask>
        ),
        (<S.SubmitBtn onClick={() => deleteTodo(todo.id)}>Delete</S.SubmitBtn>),
        (<S.SubmitBtn onClick={() => edithTodo(todo.id)}>Edit</S.SubmitBtn>))
      )}
    </S.TodoContainer>
  );
};

export default TodoItem;
