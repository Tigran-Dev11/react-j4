import React, { useState } from 'react';
import { initialTodos } from '../../utils/constants.js';
import * as S from './styled.js';

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(newTodo.trim() !== ""){
      const newTodoItem = {
        id: Math.random(),
        title: newTodo.trim(),
        completed: false
      }
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const handleEditTodo = (id, newTitle) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, title: newTitle} : todo));
    setEditId(null);
  };

  const startEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
  }

  return (
    <S.HomeContainer>
      <S.Text>Todo List</S.Text>
      <S.Section1>
        <form action="" onSubmit={handleAddTodo}>
          <S.Inp type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <S.Btn>Add</S.Btn>
        </form>
      </S.Section1>
      <S.Section2>
        <S.Ul>
          {todos.map((todo) => (
            <S.Li key={todo.id}>
              <S.Section3>
                <S.Inp type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                {editId === todo.id ? (
                  <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                ) : (
                  <S.Span completed={todo.completed}>{todo.title}</S.Span>

                )}
                {editId === todo.id ? (
                  <S.Btn onClick={() => handleEditTodo(todo.id, editText)}>Save</S.Btn>
                ) : (
                  <>
                    {todo.completed && <S.Btn onClick={() => startEdit(todo.id, todo.title)}>Edit</S.Btn>}
                    <S.Btn onClick={() => handleDeleteTodo(todo.id)}>Delete</S.Btn>
                  </>
                )}
              </S.Section3>
            </S.Li>
          ))}
        </S.Ul>
      </S.Section2>
    </S.HomeContainer>
  );
};

export default Home;
