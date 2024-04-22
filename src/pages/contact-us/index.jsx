import { useRef } from "react";
import { Input } from "../../common/Input";

const ContactUs = () => {
  // const container  = document.querySelector(".container")
  //chogtagorcel

  const inputRef = useRef();

  const numberRef = useRef(0);

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.style.border = "1px solid red";
  };

  const increment = () => {
    console.log((numberRef.current = numberRef.current + 1));
  };

  return (
    <div className="container">
      <Input type="text" inputRef={inputRef} />
      <button onClick={focusInput}>change focus</button>
      <button onClick={increment}>increment</button>
      <h1>{numberRef.current}</h1>
    </div>
  );
};

export default ContactUs;
