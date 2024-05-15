import { useSelector, useDispatch } from "react-redux";
import * as S from "./styled";
import { todosSelector } from "../../libs/redux/todos-slice/todos-selector";
import Button from "../../commons/button";
import Input from "../../commons/input";

import { todoActions } from "../../libs/redux/todos-slice/todos-slice";

const EditTask = () => {
  const { todo, todos, todoValue } = useSelector(todosSelector);

  const dispatch = useDispatch();

  const changeValue = (e) => {
    dispatch(todoActions.changeValue(e.target.value));
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(todoActions.addTodo());
  };

  return (
    <S.TodoTaskContainer>
      <S.TodoTask key={todo.id}>
        <Input
          type="text"
          placeholder="Add Your Edit Task ........"
          value={todoValue}
          onChange={changeValue}
        />
        <Button title="Add" onClick={() => addTodo(todo.id)} />
      </S.TodoTask>
    </S.TodoTaskContainer>
  );
};

export default EditTask;
