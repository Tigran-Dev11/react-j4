import { useState } from "react";
import { initialTodos } from "../../utils/constants.js";
import * as S from "./styled.js";

const Home = () => {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      editTodo(editId, text);
      setEditId(null);
    } else {
      const newTodo = {
        id: Math.random(),
        title: text,
        completed: false
      }
      setTodos((prev) => [...prev, newTodo]);
    }
    setText("");
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function startEdit(id, title) {
    setEditId(id);
    setText(title);
  }

  function editTodo(id, newTitle) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, title: newTitle} : todo));
  }

  return (
    <S.HomeContainer>
      <h1>Todos</h1>
      <S.TodoList>
        <S.TodoForm>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button>{editId ? 'Update Todo' : 'Add Todo'}</button>
          </form>
        </S.TodoForm>
        <S.TodoItem>
          {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <div className="left">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
                <p>{todo.title}</p>
              </div>
              <div className="buttons">
                <button className="delete-button" onClick={() => deleteTodo(todo.id)}>X</button>
                <button className="edit-button" onClick={() => startEdit(todo.id, todo.title)}>Edit</button>
              </div>
            </div>
          )
          
          })}
        </S.TodoItem>
      </S.TodoList>
    </S.HomeContainer>
  );
};

export default Home;
