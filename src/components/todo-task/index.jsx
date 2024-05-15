import { useSelector, useDispatch } from "react-redux";
import * as S from "./styled";
import { todosSelector } from "../../libs/redux/todos-slice/todos-selector";
import Button from "../../commons/button";
import { todoActions } from "../../libs/redux/todos-slice/todos-slice";
import EditTask from "../todo-edit";

const TodoTask = () => {
  const { todo, todos, load } = useSelector(todosSelector);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const changeCompleted = (id) => {
    dispatch(todoActions.changeCompleted(id));
  };
  const editTodo = (id) => {
    dispatch(todoActions.editTodo(id));
  };
  return (
    <S.TodoTaskContainer key={todo.id}>
      {todo.edit ? (
        <EditTask key={todo.id} />
      ) : (
        <S.TodoTaskContainer>
          {todos.map((todo) => (
            <S.TodoTask key={todo.id}>
              <S.Input
                type="checkbox"
                onChange={() => changeCompleted(todo.id)}
              />
              <S.Text className={`${todo.completed ? "completed" : ""}`}>
                {todo.title}
              </S.Text>
              <Button title="Delete" onClick={() => deleteTodo(todo.id)} />
              <Button title="Edit" onClick={() => editTodo(todo.id)} />
            </S.TodoTask>
          ))}
        </S.TodoTaskContainer>
      )}
    </S.TodoTaskContainer>
  );
};

export default TodoTask;
