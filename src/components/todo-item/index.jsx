

const TodoItem = ({id, title, completed}) =>{

    return(
        <li>
            <input type="checkbox" checked={completed} />
            <p>{title}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    )
};


export default TodoItem;