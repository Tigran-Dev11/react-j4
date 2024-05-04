import { todos } from "../../utils/todos";

function TodoList (){

    return(
        <div>
            {todos.map(todo=>{
                <div key={todo.id}>
                    <input type="checkbox" />
                    <p>{todos.title}</p>
                    <button>X</button>
                </div>
            })}
        </div>
    )
};


export default TodoList;