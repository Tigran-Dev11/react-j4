import * as S from "./styled";
import TodoForm from "../../components/todo-form/todo-form";
import TodoTask from "../../components/todo-form/todo-task";

import { useState } from "react";

import { initialTodos } from "../../constant/index";

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <S.HomeContainer>
      <S.FormContainer>
        <S.TodoTitle>Todo Tasks</S.TodoTitle>
        <TodoForm setTodos={setTodos} />
        <TodoTask todos={todos} setTodos={setTodos} />
      </S.FormContainer>
    </S.HomeContainer>
  );
};

export default Home;
