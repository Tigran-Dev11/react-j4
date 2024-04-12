import { useState } from "react";

const Login = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState({
    email: null,
    password: null
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginFormData;

  const inputChange = (event) => {
    setLoginFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value //email: event.target.value
    }));
  };

  //   console.log(loginFormData);

  const onSubmit = (event) => {
    event.preventDefault();
    //check valid login form
    if (!email) { //emil === ''
      setError({ ...error, email: "this field is required" });
    } else {
        setError({ ...error, email: null });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={inputChange}
      />
      <p>{error?.email ?? null}</p>
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={inputChange}
      />
      {/* <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <br />
      <h2>{title}</h2> */}
      <button>submit</button>
    </form>
  );
};

export default Login;
