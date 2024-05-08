import { useState } from "react";
import * as S from "./styled.js";

const Home = () => {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: 'Learn JS',
      completed: false
    },
    {
      id: Math.random(),
      title: 'Learn React',
      completed: false
    },
    {
      id: Math.random(),
      title: 'Learn CSS',
      completed: false
    },
  ]);


  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: text,
      completed: false
    }
    setTodos((prev) => [...prev, newTodo]);
    setText("");

  }

  const deleteTodo = (id) => {

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }


  // const editTodo = (id, newTitle) => {
  //   setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, newTitle } : todo))
  // }

  const isCompleted = (id)=>{
    setTodos((prev) => prev.map(todo => todo.id === id ? {...todos, completed: true,  } : todo))
  }


  return (
    <S.HomeContainer>
      <h1>Todos</h1>
      <S.TodoList >
        <S.TodoForm >
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button>Add Todo</button>
          </form>
        </S.TodoForm>
        <S.TodoItem >
          {todos.map((todo) => {
            return (
              <div className="initialTodos">
                <input type="checkbox" onClick={()=> isCompleted(todo.id)}/>
                <p>{todo.title}</p>
                <div className="todoItemButtons">
                  <button onClick={() => editTodo(todo.id, todo.title)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>X</button>
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
