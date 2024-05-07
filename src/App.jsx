import { useState } from 'react';
import './App.css';
import TodoForm from './component/todo-form';
import TodoList from './component/todo-list';
import {initialTodos} from './utils'





function App() {
const [todos, setTodos] = useState([initialTodos])

  return (
    <>
      <TodoForm />
      <TodoList  todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
