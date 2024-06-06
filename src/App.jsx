
import { useState } from 'react';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import {initialTodos} from './utils'





function App() {
const [todos, setTodos] = useState(initialTodos)

  return (
    <>
      <TodoForm setTodos={setTodos}/>
      <TodoList  todos={todos}/>
    </>
  )
}

export default App;