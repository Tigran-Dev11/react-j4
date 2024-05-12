import { useDispatch } from "react-redux";
import { toggleComplete } from "./todo-slice";

const TodoItem = ({id, title, completed}) =>{

    const dispatch = useDispatch();

    const handleComplete = () =>{
        dispatch(
            toggleComplete({id:id, completed: !completed})
        )
    }

    return(
        <div>
            <input type="checkbox" checked={completed} onChange={handleComplete}/>
            <p>{title}</p>
            <button>Delete</button>
        </div>
    )
};


export default TodoItem;