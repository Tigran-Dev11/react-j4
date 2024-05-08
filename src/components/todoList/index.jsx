import React , {useState} from "react";
import "./style.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () =>{
        if(newTodo.trim() !== ""){
            setTodos([...todos,{ text: newTodo.trim(), cheked: false}]);
            setNewTodo("");
        }
    }

    const handleDeleteTodo = (index) =>{
        const NewTodos =[...todos];
        NewTodos.splice(index,1)
        setTodos(NewTodos);

    };

    const handleToggleTodo = (index) =>{
        const NewTodos =[...todos];
        NewTodos[index].checked = !NewTodos[index].checked;
        setTodos(NewTodos);
    };

    const handleEditTodo = (index) =>{
        
    }



    return(
        <div className="container">
            <h1>To-Do List</h1>

            <div className="sc1">
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
            </div>
            <div className="sc2">
            <ul>
                {todos.map((todo, index)=> (
                    
                    <li key={index} style={{ display : "flex"}}>
                        <div style={{ display: "flex", alignItems: "center"}}>
                      <input type="checkbox" checked={todo.checked} onChange={()=> handleToggleTodo(index)}/>
                      <span style={{ marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</span>
                      <button onClick={()=> handleEditTodo(index)}>Edit</button>
                      <button onClick={()=> handleDeleteTodo(index)}>Delete</button>
                      </div>
                    </li>
                    
                ))}
            </ul>
            </div>
        </div>
    )
}

export default TodoList;