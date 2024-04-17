import { useState } from 'react';
import "./login.css";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit1 = (e) =>{
        e.preventDefault();
     
    }

  
    return (
       <div className='login'>
       <form className='form1' onSubmit={submit1}>
       <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='email' id='email' name='email'/>
       <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder='password' id='password' name='password'/>
       <button type='submit'>  <span class="span-mother">
    <span>B</span>
    <span>u</span>
    <span>t</span>
    <span>t</span>
    <span>o</span>
    <span>n</span>
  </span>
  <span class="span-mother2">
    <span>B</span>
    <span>u</span>
    <span>t</span>
    <span>t</span>
    <span>o</span>
    <span>n</span>
  </span></button>
       </form>
       <button className='btn' onClick={() => props.onFormSwitch('register')}> Register here.</button>
       </div>
    );
};

export default Login;