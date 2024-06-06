import TodoItem from "../todo-item";
// import * as S from "styled-components";

function TodoList({ todos, setTodos }) {
  const deleteTodo = (title) => {

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