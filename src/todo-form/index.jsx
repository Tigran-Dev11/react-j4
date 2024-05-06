import "./style.scss";
// import Input from "../commons/input";
// import Button from "../commons/button";
import { useState } from "react";
import TodoTask from "../todo-task";

function TodoForm() {
  const [title, setTitle] = useState('');
  

  const changeValue = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = ({e,setTitle}) => {
    e.preventDefault();
  
        <TodoTask title = {setTitle}/>
      
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
