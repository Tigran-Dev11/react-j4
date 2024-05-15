import * as S from "./styled";
import Input from "../../commons/input";
import Button from "../../commons/button";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../libs/redux/todos-slice/todos-slice";

import { todosSelector } from "../../libs/redux/todos-slice/todos-selector";

const TodoForm = () => {
  const { todoValue } = useSelector(todosSelector);


  const dispatch = useDispatch();

  const changeValue = (e) => {
    dispatch(todoActions.changeValue(e.target.value));
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(todoActions.addTodo());
  };

  return (
    <>
      <S.TodoTitle>Todos Task</S.TodoTitle>
      <S.TodoForm onSubmit={addTodo}>
        <Input
          type="text"
          placeholder="Add Your Next Task ........"
          value={todoValue}
          onChange={changeValue}
        />

        <Button title="+" />
      </S.TodoForm>
    </>
  );
};

export default TodoForm;
