import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo.slice";

const TodoItem = ({ completed }) => {
  const { todos } = useSelector(todoSelector);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const isCompleted = (id) => {
    dispatch(todoActions.isCompleted(id));
  };

  const editTodo = (id) => {
    dispatch(todoActions.editTodo(id));
  };
  return (
    <S.Container>
      {todos.map((todo) => {
        return (
          <S.TodoItem key={todo.id}>
            <S.AcceptedTodo
              type="checkbox"
              checked={completed}
              onClick={() => isCompleted(todo.id)}
            />
            <S.TitleTodo
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </S.TitleTodo>
            <S.ButtonsContainer>
              <S.EditButton onClick={() => editTodo(todo.id)}>
                Edit
              </S.EditButton>
              <S.DeleteButton onClick={() => deleteTodo(todo.id)}>
                Delete
              </S.DeleteButton>
            </S.ButtonsContainer>
          </S.TodoItem>
        );
      })}
    </S.Container>
  );
};

export default TodoItem;
