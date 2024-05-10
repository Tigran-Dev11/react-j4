
import * as S from "./styled.js";
import { useState } from "react";
import Input from "../../../commons/input/index.jsx";


function EditForm({ setTodos , editTodo,todo }){
  const [title, setTitle] = useState("");

  const changeValue = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title){
    editTodo ({
      id: Math.random(),
      name: title,
      status: false,
      isEdith:false
    });

    setTodos((prev) => [...prev, editTodo]);
editTodo(todo.id)

    setTitle("");
  }
  };

  return(
    <S.FormContainer>
      <S.TodoContainer>
      <form onSubmit={handleSubmit}>
        <Input type="text" onChange={changeValue} placeholder= "Udate Task" value={title} />
        <button>Udate Task</button>
      </form>
      </S.TodoContainer>
      </S.FormContainer>
  )
};

export default EditForm;
