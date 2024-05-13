import React from "react";
import * as S from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../libs/redux/counter-slice/counter-slice";
import { counterSelector } from "../../libs/redux/counter-slice/counter-selector";

const Home = () => {
  const { number, numbers } = useSelector(counterSelector);
  const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch(counterActions.increment());
  // };
  // const decrement = () => {
  //   dispatch(counterActions.decrement());
  // };

  const ss = (e) => {
    e.preventDefault()

    if (input !== "") {
     console.log(e.target.value);
    }
  }

  return (
    <S.allCont>
      <S.titleProject>Todo-List</S.titleProject>
      <S.contTodos>
        <S.form onSubmit={ss}>
          <S.addTodoInput id="input" type="text" placeholder="type your plans for today" />
          <S.addButton>enter</S.addButton>
        </S.form>
      </S.contTodos>
    </S.allCont>
  );
};

export default Home;
