import { useSelector } from "react-redux";
import TodoItem from "../todo-item"
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";



const TodoList = () => {

    const {todos} = useSelector(todoSelector);

    return(
        <ul>
            {todos.map((todo) => {
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
            })}
        </ul>
    )
};

export default TodoList;