
import TodoItem from "../todo-item";
import "./style.css";

function TodoList({ todos, setTodos, deleteTodo }) {
  const deleteTodo = (id) => {

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoList;