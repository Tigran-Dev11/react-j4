const Register = () => {
    let logindata = localStorage.getItem("logindata")
      ? JSON.parse(localStorage.getItem("logindata"))
      : null;
  
    return <div>{logindata?.name}</div>;
  };
  
  export default Register;