import { useState } from "react";
import "./style.css";

function TodoForm() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        setText(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button>Add Todo</button>
        </form>
    )
};

export default TodoForm;