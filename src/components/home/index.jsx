import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../libs/redux/todo-slice/todo-selector";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";
import TodoItem from "../../commons/todo-card";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { todoValue } = useSelector(todoSelector);


  const { todos } = useSelector(todoSelector);

  useEffect(() => {
    dispatch(todoActions.getTodos());
  }, []);

  const onChange = (event) => {
    dispatch(todoActions.onChangeInput(event.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.addNewTodo());
  };

  return (
    <S.allCont>
      <S.titleProject>Todo-List</S.titleProject>
      <S.contTodos>
        <S.form onSubmit={onSubmit}>
          <S.addTodoInput
            id="input"
            type="text"
            placeholder="type your plans for today"
            value={todoValue}
            onChange={onChange}
          />
          <S.addButton>enter</S.addButton>
        </S.form>
        <S.Ul>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </S.Ul>
      </S.contTodos>
    </S.allCont>
  );
};

export default Home;
