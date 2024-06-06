import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled"
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo.slice";

const TodoHeader = () => {

    const { todoValue } = useSelector(todoSelector);
    const dispatch = useDispatch();
  
    const onChange = (event) => {
      dispatch(todoActions.onchangeInput(event.target.value));
    };
  
    const onsubmit = (event) => {
      event.preventDefault();
      dispatch(todoActions.addTodo());
    };
  return (
    <S.ContainerForm onSubmit={onsubmit}>
      <S.AddInput
        type="text"
        onChange={onChange}
        value={todoValue}
        placeholder="Add Todo"
      />
      <S.AddButton>add Todo</S.AddButton>
    </S.ContainerForm>
  )
}

export default TodoHeader
