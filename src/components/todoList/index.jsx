import React , {useState} from "react";
import * as S from "./styled";

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
         <S.Container>
            <S.Text>To Do List</S.Text>

            <S.Section1>
            <S.Inp type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}></S.Inp>
            <S.Btn onClick={handleAddTodo}>Add</S.Btn>
            </S.Section1>
            <S.Section2>
            <S.Ul>
                {todos.map((todo, index)=> (

                        <S.Li key={index} style={{ display: "flex"}}>
                            <S.Section3 style={{display: "flex", alignItems: "center"}}>
                      <S.Inp type="checkbox" checked={todo.checked} onChange={()=> handleToggleTodo(index)}></S.Inp>
                      <S.Span style={{ marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</S.Span>
                      <S.Btn onClick={()=>handleEditTodo(index)}>Edit</S.Btn>
                      <S.Btn onClick={()=> handleDeleteTodo(index)}>Delete</S.Btn>
                      </S.Section3>
                      </S.Li>
                    
                    
                ))}
            </S.Ul>
            </S.Section2>
            </S.Container>
    )
}

export default TodoList;