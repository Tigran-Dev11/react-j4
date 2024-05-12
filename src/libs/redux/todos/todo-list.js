import { useSelector } from "react-redux";
import TodoItem from "./todo-item";


const TodoList = () =>{

    const todos = useSelector((state) => state.todos)

    return(
        <div>
            {todos.map((todo)=>{
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
            })}
        </div>
    )
};


export default TodoList;