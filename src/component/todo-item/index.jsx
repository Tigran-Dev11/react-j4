/* eslint-disable react/prop-types */
import "./style.css";

function TodoItem({ todo,deleteTodo}) {


    return (
        <div className="todoItem">
            <input type="checkbox" />
            <p>{todo.title}</p>
            <button onClick={()=>deleteTodo(todo.id)}>X</button>
        </div>
    )
};

export default TodoItem;