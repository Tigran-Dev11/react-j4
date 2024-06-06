import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice";

const TodoHeader = () => {
  const { todoValue } = useSelector(todoSelector);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(todoActions.onChange(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.onSubmit());
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={todoValue} onChange={onChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoHeader;
