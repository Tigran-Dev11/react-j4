import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice";

const TodoItem = () => {
  const { todo, todos } = useSelector(todoSelector);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const isCompleted = (id) =>{
    dispatch(todoActions.isCompleted(id))
  }

  return (
    <li>
      <input type="checkbox" onClick={() => isCompleted(todo.id)} />
      <p>{todo.title}</p>
      <button>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
