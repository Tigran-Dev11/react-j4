import { todos } from "../../utils";
import TodoItem from "../todo-item";
import "./style.css";

function TodoList() {

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo}/>
                )
            })}
        </div>
    )
};

export default TodoList;