import { initialTodos } from "../../utils/constants.js";
import * as S from "./styled.js";

const Home = () => {
  return (
    <S.HomeContainer>
      <h1>Todos</h1>
      <S.TodoList>
        <S.TodoForm>
          <form action="">
            <input type="text" />
            <button>Add Todo</button>
          </form>
        </S.TodoForm>
        <S.TodoItem>
          {initialTodos.map((todo) => {
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
