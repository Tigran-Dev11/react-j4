
import * as S from "./styled.js";
import { useState } from "react";


function TodoForm({ setTodos }){
  const [title, setTitle] = useState("");

  const changeValue = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random(),
      name: title,
      status: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  return(
    <S.FormContainer>
      <S.TodoContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeValue} value={title} />
        <button>Add</button>
      </form>
      </S.TodoContainer>
      </S.FormContainer>
  )
};

export default TodoForm;
