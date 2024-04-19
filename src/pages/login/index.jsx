import "./style.scss";
import Input from "../../common/input";
import Button from "../../common/button";

const Login = () => {
  return (
    <div className="Login">
      <form action="">
        <h1>Login</h1>
        <Input type="email" placeholder="Email" />

        <Input type="pass" placeholder="Password" />

        <Button title="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Login;
