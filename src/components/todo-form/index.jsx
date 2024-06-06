import { useState } from "react";
// import * as S from "styled-components";
import "./style.css";

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
      <button className="button">Add New Todo</button>
    </form>
  );
}

export default TodoForm;