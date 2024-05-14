import { useSelector } from "react-redux";
import TodoItem from "../todo-item"
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";



const TodoList = () => {

    const {todos} = useSelector(todoSelector);

    return(
        <ul>
            {todos.map((item) => {
                <TodoItem key={item.id} todo={item}/>
            })}
        </ul>
    )
};

export default TodoList;