import { useState } from "react";
import css from "./style.module.scss";

const Register = () => {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (firstname === "") {
      setMessage("firstname is empty");
      return;
    } else if (firstname.length < 4) {
      setMessage("firstname must be at least 4");
      return;
    } else {
      setMessage("");
    }
    if (lastname === "") {
      setMessage("lastname is empty");
      return;
    } else if (lastname.length < 4) {
      setMessage("lastname must be at least 4");
      return;
    } else {
      setMessage("");
    }
    if (email === "") {
      setMessage("email is empty");
      return;
    } else if (email.length < 8) {
      setMessage("lastname must be at least 8");
      return;
    } else {
      setMessage("");
    }
    if (password === "") {
      setMessage("password is empty");
      return;
    } else if (password.length < 8) {
      setMessage("lastname must be at least 8");
      return;
    } else {
      setMessage("");
    }

    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const { firstname, lastname, email, password } = formData;

  const inputChange = (event) => {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={css.root}>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={firstname}
          onChange={inputChange}
        />
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={lastname}
          onChange={inputChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={inputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={inputChange}
        />
        <p>{message}</p>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
