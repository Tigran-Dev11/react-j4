import TodoItem from "../todo-item/index.jsx";
import * as S from "./styled.js";

function TodoTask({ todos, setTodos }) {

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? {...todo, status: !todo.status } : todo))
   
    );
  };
  
  const edithTodo = (id) =>{
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, isEdith: !todo.isEdith } : todo))
  )
 
  }
  
  return (
    <S.TodoContainer>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} changeStatus={changeStatus} edithTodo={edithTodo} />;
      })}
    </S.TodoContainer>
  );
}

export default TodoTask;
