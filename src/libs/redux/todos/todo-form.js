import { useDispatch } from "react-redux";
import { addTodo } from "./todo-slice";


const TodoForm = () =>{

    const dispatch = useDispatch();

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo({title: value}))
    };

    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Add Todo" value={value} />
            <button>Add Todo</button>
        </form>
    )
};


export default TodoForm;