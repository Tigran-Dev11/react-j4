import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { TodoSelector } from "../../libs/redux/slice/selector";
import { todosAction } from "../../libs/redux/slice/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const { todoValue } = useSelector(TodoSelector);

  const getValue = (e) => {
    dispatch(todosAction.getValue(e.target.value));
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(todosAction.addTodo());
  };

  return (
    <S.Container>
      <S.TodoForm onSubmit={addTodo}>
        <S.TodoText
          type="text"
          placeholder="Add Your New Task"
          value={todoValue}
          onChange={getValue}
        ></S.TodoText>
        <S.TodoSubmit>Add Todo</S.TodoSubmit>
      </S.TodoForm>
    </S.Container>
  );
};

export default TodoForm;
