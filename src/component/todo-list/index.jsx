import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    function handleDelete(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }


    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    <li key={index}>{todo}
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>

                })}
            </ul>

        </div>
    )
};


export default TodoList;