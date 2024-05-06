
import { todos } from "../constant";
import "./style.scss";

const TodoItem =()=>{
  return  todos.map((todo)=>{
        return(<div className="todoCont">
            <p>{todo.name}</p>
            <button>Delete</button>
            <button>Edit</button>
            </div>
        )
     
    })
}

export default TodoItem;