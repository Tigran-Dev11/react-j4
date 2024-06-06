import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { TodoSelector } from "../../libs/redux/slice/selector";
import { todosAction } from "../../libs/redux/slice/todoSlice";

const TodoItem = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector(TodoSelector);

  const deleteTodo = (id) => {
    dispatch(todosAction.deleteTodo(id));
  };

  const isCompleted = (id) => {
    dispatch(todosAction.isCompleted(id));
  };

  return (
    <S.Container>
      {todos.map((todo) => (
        <S.ItemContainer key={todo.id}>
          <S.CheckInput
            type="checkbox"
            onChange={() => isCompleted(todo.id)}
          ></S.CheckInput>
          <S.ItemText className={`${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </S.ItemText>
          <S.DeleteBtn onClick={() => deleteTodo(todo.id)}>Delete</S.DeleteBtn>
          <S.EditBtn>Edit</S.EditBtn>
        </S.ItemContainer>
      ))}
    </S.Container>
  );
};

export default TodoItem;
