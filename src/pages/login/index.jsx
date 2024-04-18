import "./style.scss";

const Login = () => {
  return (
    <div>
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Password" />
      <button>Show Password</button>
      <button>Join</button>
    </div>
  );
};

export default Login;