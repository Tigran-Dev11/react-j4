
import TodoItem from "../todo-item/index.jsx";
import * as S from "./styled.js"

function TodoTask({ todos, setTodos}) {
    const deleteTodo = (id) => {
  
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    const changeStatus = (id) => {
  
     setTodos((prev) =>{
      prev.map((todo) =>{
        if(todo.id == id){
          todos = {status:true}
        }
      })
     })
    };
  
    return (
      <S.TodoContainer>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onChange = {changeStatus} deleteTodo={deleteTodo} />;
        })}
     </S.TodoContainer>
    );
  }

export default TodoTask