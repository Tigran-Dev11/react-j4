import { useState } from "react";
import css from "./style.module.scss";

const Register = () => {
  // const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const [inputData, setInputData] = useState({
    userName: "",
    email: ""
  });

  const { userName, email } = inputData;
  const [text, setText] = useState("");
  const onChangeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };
  const [message, setMessage] = useState("");
  const valids = (e) => {
    e.preventDefault();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email)) {
      setMessage("Email is Valid");
    } else if (email === "") {
      setMessage("Please Enter Email");
    } else if (!regexEmail.test(email)) {
      setMessage("Email is Invalid");
    } else {
      setMessage("");
    }

    if (username !== "") {
      setMessage("name is valid");
      return;
    }
    if (username == "") {
      setMessage("name is invalid");
      return;
    }
  };

  return (
    <div className={css.root}>
      <form onSubmit={valids}>
        <h1>Register</h1>
        <input
          type="text"
          name="userName"
          placeholder="Check Firstname"
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Check Lastname"
          onChange={onChangeInput}
        />
        <input
          type="email"
          name="mail"
          placeholder="Check Email"
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Check Password"
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="copypassword"
          placeholder="Check Copy Password"
          onChange={onChangeInput}
        />
        <p>{message}</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
