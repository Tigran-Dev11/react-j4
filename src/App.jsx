import { useState } from "react";
import Login from "./components/login/login";
import Home from "./pages/home";

function App() {
  //let title  = 'Hello'

  const [title, setTitle] = useState("Hello");

  const [number, setNumber] = useState(0);

  // title = 10 // senc chi kareli

  const increment = () => {
    // setNumber(number + 1);
    setNumber((prevState) => prevState + 1);
  };

  // let a =1
  // let b =2

  return (
    <div className="App">
      {/* <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("Barev");
        }}
      >
        change title
      </button>

      <br />
      <br />
      <h1>{number}</h1>
      <button onClick={increment}>increment</button>
       */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
