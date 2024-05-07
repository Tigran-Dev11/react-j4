import { useState } from "react";
import { initialTodos } from "../../utils/constants.js";
import * as S from "./styled.js";

const Home = () => {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState([initialTodos]);

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


  return (
    <S.HomeContainer>
      <h1>Todos</h1>
      <S.TodoList>
        <S.TodoForm>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button>Add Todo</button>
          </form>
        </S.TodoForm>
        <S.TodoItem>
          {initialTodos.map((initialTodos) => {
            return (
              <div className="initialTodos">
                <input type="checkbox" />
                <p>{initialTodos.title}</p>
                <button>X</button>
              </div>
            )
          })}
        </S.TodoItem>
      </S.TodoList>
    </S.HomeContainer>
  );
};

export default Home;
