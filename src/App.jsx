import { useState } from 'react';
import './App.css';
import TodoForm from './component/todo-form';
import { initialTodos } from "./utils";
import TodoList from './component/todo-list';





function App() {


  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App
