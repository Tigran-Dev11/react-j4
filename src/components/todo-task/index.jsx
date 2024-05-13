import { useSelector, useDispatch } from "react-redux";
import * as S from "./styled";
import { todosSelector } from "../../libs/redux/todos-slice/todos-selector";
import Button from "../../commons/button";
import { todoActions } from "../../libs/redux/todos-slice/todos-slice";

const TodoTask = () => {
  const { todo, todos } = useSelector(todosSelector);
  const dispatch = useDispatch();

  const deleteTodo = () => {
   
    dispatch(todoActions.deleteTodo());
  };
  return (
    <S.TodoTaskContainer>
      {todos.map((todo) => (
        <S.TodoTask key={todo.id}>
            <S.Input type="checkbox"/>
          <S.Text>{todo.name}</S.Text>
          <Button title="Delete"  onClick = {() => deleteTodo(todo.id)}/>
          <Button title="Edit"/>

        </S.TodoTask>
      ))}
    </S.TodoTaskContainer>
  );
};

export default TodoTask;
