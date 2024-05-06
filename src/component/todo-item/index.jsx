import "./style.css";

function TodoItem({ todo }) {

    function deleteTodo() {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="todoItem">
            <input type="checkbox" />
            <p>{todo.title}</p>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
};

export default TodoItem;