import { useState } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: text,
      completed: false
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
