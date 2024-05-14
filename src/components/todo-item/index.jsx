

const TodoItem = ({ todo }) => {

    const { id, title, completed } = todo;
    
    return (
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