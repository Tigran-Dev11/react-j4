import { useDispatch } from "react-redux";
import * as S from "./styled";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";

const TodoItem = ({ todo }) => {
  const { completed, title, id } = todo;

  const dispatch = useDispatch();


  const editTodo = () => {
    dispatch(todoActions.editTodo());
  };

  const acceptedTodo = () => {
    dispatch(todoActions.acceptedTodo());
  };

  const deleteHandleTodo = () => {
    dispatch(todoActions.deleteTodo(id));
  };
  return (
    <S.todoCont>
      <S.TodoCheckInput
        type="checkbox"
        checked={completed}
        onChange={acceptedTodo}
      />
      <S.titleTodo>{title}</S.titleTodo>
      <S.buttonsCont>
        <S.editButton onClick={editTodo}>edit</S.editButton>
        <S.deleteButton onClick={() => deleteHandleTodo()}>
          delete
        </S.deleteButton>
      </S.buttonsCont>
    </S.todoCont>
  );
};

export default TodoItem;
