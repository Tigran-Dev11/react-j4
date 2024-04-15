
import { useState } from "react";

import "./style.scss"

import Profile from "../profile";

 const Register = () => {
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
       [event.target.name]: event.target.value 
     }));
   };
 
     console.log(loginFormData);
   localStorage.setItem('userInfo', JSON.stringify(loginFormData))

 
   const onSubmit = (event) => {
     event.preventDefault();
     if (!email) {
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

       {/* {window.location.href="./././profile/index"} */}

        
       <button>Register</button>
     </form>
   );
 };
 
 export default Register;