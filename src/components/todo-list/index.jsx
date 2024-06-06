import * as S from "./styled.js";
import React, { useState } from "react";
import Input from "../../commons/input";
import Button from "../../commons/button/index.jsx";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Redux' },
    { id: 3, text: 'Learn Next Js' },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), cheked: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos[index].checked = !NewTodos[index].checked;
    setTodos(NewTodos);
  };

  const handleDeleteTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos.splice(index, 1);
    setTodos(NewTodos);
  };

  const handleEditTodo = () => {
  };

  return (
    <S.Container>
      <S.Title> Todo List </S.Title>
      <S.Section1>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></Input>
        <Button onClick={handleAddTodo}>Add</Button>
      </S.Section1>
      <S.Section2>
        <S.Ul>
          {todos.map((todo, index) => (
            <S.Li key={index}>
              <S.TodoItems>
                <S.Checkbox
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleToggleTodo(index)}
                ></S.Checkbox>
                <S.Span
                  style={{
                    textDecoration: todo.checked ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </S.Span>
                <Button onClick={() => handleDeleteTodo(index)}>Delete</Button>
                <Button onClick={() => handleEditTodo(index)}>Edit</Button>
              </S.TodoItems>
            </S.Li>
          ))}
        </S.Ul>
      </S.Section2>
    </S.Container>
  );
};

export default TodoList;
