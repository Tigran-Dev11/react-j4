import { useCallback, useMemo, useState } from "react";
import ChildComponent from "../../components/child-component";
import * as S from "./styled";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const [number2, setNumber2] = useState(10);

  const [age, setAge] = useState(20);

  console.log("render parent");

  //   const increment = () => {
  //     setNumber({ num: number + 1 });
  //   };

  //   const decrement = () => {
  //     setNumber({ num: number - 1 });
  //   };

  const increment = useCallback(() => {
    setNumber(number2 + 1);
  }, [number2]);

  const decrement = useCallback(() => {
    setNumber(number2 - 1);
  }, []);

  const persons = useMemo(() => {
    return [
      {
        name: "John",
        age: age
      },
      {
        name: "David",
        age: 40
      }
    ];
  }, [age]);

  const changeNumberTwo = () => {
    setNumber2(number2 + 2);
  };

  const changeAge = useCallback((number) => {
    setAge(age + 1 + number);
  },[]);




  return (
    <S.CounterContainer>
      <ChildComponent number={number} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h2>{number2}</h2>
      <br />
      <button onClick={changeNumberTwo}>change number 2</button>

      <h4>{persons[0].age}</h4>

      <button onClick={()=>changeAge(10)}>change age</button>
    </S.CounterContainer>
  );
};

export default Counter;
