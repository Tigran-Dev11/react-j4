import { useState } from "react";

const Home = ({ title }) => {
  const [number, setNumber] = useState(10);

  const [result, setResult] = useState(0)

  // let number = 10;

  const increment = () => {
    // number = number + 1;
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };



  const x =()=>{
    let a =10;
    let b =20;

    let c = a + b

    setResult(c)
  }

  console.log("rendering");

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>

      <h1>{title}</h1>
    </div>
  );
};

export default Home;
