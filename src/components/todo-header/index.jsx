import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";
import * as S from './styled.js';

const TodoHeader = () => {
  const { todoValue } = useSelector(todoSelector);

  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(todoActions.onChangeInput(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(todoActions.addNewTodo());
  };

  return (
    <S.Form onSubmit={onSubmit}>
      < S.Inp type="text" value={todoValue} onChange={onChange}></S.Inp>
      <S.Btn>add todo</S.Btn>
     </S.Form> 
  );
};

export default TodoHeader;