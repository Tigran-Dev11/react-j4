import "./style.scss";
// import Input from "../commons/input";
// import Button from "../commons/button";
import { useState } from "react";
import { todos } from "../constant";

function TodoForm() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  

  const changeValue = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  

  

    setTodos([
      {
        id:Math.random(),
        name:setTitle,
      

      }
    ])
     
      
  };
   


  return (
    <div>
    <form onSubmit={handleSubmit}>
     <input type="text" onChange={changeValue} value={title}/>
      <button>Add</button>
    </form>
    </div>
  );
}

export default TodoForm;
