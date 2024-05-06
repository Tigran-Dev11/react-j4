import { useState } from 'react';
import './App.css';
import TodoForm from './component/todo-form';
import { initialTodos } from "./utils";
import TodoList from './component/todo-list';





function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
    <TodoForm  setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
