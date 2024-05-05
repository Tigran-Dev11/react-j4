import "./style.css";

function TodoItem ({todo}){

    return(
        <div className="todoItem">
            <input type="checkbox"/>
            {todo.title}
            <button>X</button>
        </div>
    )
};

export default TodoItem