import { useState } from 'react';
import './App.css';
import TodoForm from './component/todo-form';
import { initialTodos } from "./utils";
import TodoList from './component/todo-list';





function App() {
<<<<<<< HEAD


  return (
    <>
      <TodoForm />
      <TodoList />
=======
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
    <TodoForm  setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
>>>>>>> a4d46005e03318a389fcfcfb0fd734cbcdf1b670
    </>
  )
}

export default App
