import "./style.css";

function TodoItem ({todo}){

    return(
        <div>
            <input type="checkbox"/>
            {todo.title}
            <button>X</button>
        </div>
    )
};

export default TodoItem