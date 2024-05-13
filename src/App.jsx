import { useDispatch, useSelector } from "react-redux";
import TodoHeader from "./components/todo-header";
import { todoSelector } from "./libs/redux/todo-slice/todo-selector";
import TodoItem from "./components/todo-item";
import { useEffect } from "react";
import { todoActions } from "./libs/redux/todo-slice/todo-slice";

function App() {
  const { todos } = useSelector(todoSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.getTodos());
  }, []);

  return (
    <>
      <TodoHeader />
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
