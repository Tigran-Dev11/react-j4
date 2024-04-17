import { useState } from "react";
import "./register.css";

// const Register = () =>{

//     const submit = (event) => {
//         event.preventDefault();

//         localStorage.setItem('registerFormData', JSON.stringify(registerFormData))

//     }
const Register = (props) => {
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [name, setName] = useState('')
    
        const submit1 = (e) =>{
            e.preventDefault();
        }
 
    
    return (
        <div className="register">
        <form onSubmit={submit1}>
       <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='FullName' id='name' name='name'/>
       <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='email' id='email' name='email'/>
       <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder='password' id='password' name='password'/>
       <button type='submit'>login</button>
       </form>
       <button className="btn" onClick={() => props.onFormSwitch('login')}> Login here.</button>
       </div>
    );

        
   
    

};

export default Register;