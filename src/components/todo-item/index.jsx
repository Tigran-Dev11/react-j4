// import * as S from "styled-components";
import "./style.css"
function TodoItem({ todo,deleteTodo}) {


    const handleToggleTodo = (index) => {
        const NewTodos = [...todo];
        NewTodos[index].checked = !NewTodos[index].checked;
        setTodos(NewTodos);
      };
      const deleteTodos = (index) => {
        const NewTodos = [...deleteTodo];
        NewTodos.splice(index, 1);
        setTodos(NewTodos);
      };

    return (
        
        <div className="todoItem">
            <input  type="checkbox"
            onChange={()  => handleToggleTodo}
            checked={todo.checked} />
            <p>{todo.title}</p>
            <button onClick={()=>deleteTodos(todo.id)}>X</button>
        </div>
    )
};

export default TodoItem;