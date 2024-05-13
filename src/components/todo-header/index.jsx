import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";

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
    <form onSubmit={onSubmit}>
      <input type="text" value={todoValue} onChange={onChange} />
      <button>add todo</button>
    </form>
  );
};

export default TodoHeader;
