import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";

const TodoItem = () => {
  const { todo, todos } = useSelector(todoSelector);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const isCompleted = (id) => {
    dispatch(todoActions.isCompleted(id));
  };

  const editTodo = (id) => {
    dispatch(todoActions.editTodo());
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => isCompleted(todo.id)}
            />
            <p>{todo.title}</p>
            <div>
              <button onClick={() => editTodo(todo.id)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
