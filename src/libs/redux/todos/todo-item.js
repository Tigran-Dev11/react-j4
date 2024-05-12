import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./todo-slice";

const TodoItem = ({id, title, completed}) =>{

    const dispatch = useDispatch();

    const handleComplete = () =>{
        dispatch(
            toggleComplete({id:id, completed: !completed})
        )
    };

    const handleDelete = () =>{
        dispatch(deleteTodo({id : id}))
    };


    return(
        <div>
            <input type="checkbox" checked={completed} onChange={handleComplete}/>
            <p>{title}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
};


export default TodoItem;