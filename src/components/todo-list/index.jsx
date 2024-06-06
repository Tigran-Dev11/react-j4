import { useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-selector";
import TodoItem from "../todo-item";

const TodoList = () => {
  const { todos } = useSelector(todoSelector);

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};


export default TodoList;