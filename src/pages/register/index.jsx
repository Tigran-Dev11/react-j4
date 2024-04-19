import "./style.scss";

const Register = () => {
  return (
    <div>
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Show Password</button>
      <button>Complete Registration</button>
    </div>
  );
};
export default Register;