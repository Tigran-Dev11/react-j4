import React, { useState } from "react";
import * as S from "./styled";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const isCompleted = (index) => {
    const NewTodos = [...todos];
    NewTodos[index].checked = !NewTodos[index].checked;
    setTodos(NewTodos);
  };

  const updateTodo = () => {
    if (editValue.trim() !== "") {
      const newTodos = [...todos];
      newTodos[editIndex] = editValue;
      setTodos(newTodos);
      setEditIndex(null);
      setEditValue("");
    }
  };

  return (
    <S.container>
      <S.title>Harut's todo</S.title>
      <S.addTasksection>
        <S.topInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <S.topAddButton onClick={addTodo}>Add</S.topAddButton>
      </S.addTasksection>
      <S.ul>
        {todos.map((todo, index) => (
          <S.li key={index}>
            {editIndex === index ? (
              <div>
                <S.topInput
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={updateTodo}>Update</button>
              </div>
            ) : (
              <div>
                <S.checkboxInput
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => isCompleted(index)}
                />
                {todo}
                <S.editButton onClick={() => editTodo(index)}>
                  edit
                </S.editButton>
                <S.DeleteButton onClick={() => deleteTodo(index)}>
                  delete
                </S.DeleteButton>
              </div>
            )}
          </S.li>
        ))}
      </S.ul>
    </S.container>
  );
};

export default Todo;
