import { useState } from 'react';
import "./login.scss";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit1 = (e) =>{
        e.preventDefault();
        console.log(email);
    }

  
    return (
       <div className='login'>
       <form className='form1' onSubmit={submit1}>
       <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='email' id='email' name='email'/>
       <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder='password' id='password' name='password'/>
       <button type='submit'>login</button>
       </form>
       <button className='btn' onClick={() => props.onFormSwitch('register')}>Don't have an accaount? Register here.</button>
       </div>
    );
};

export default Login;