import "./style.css";
import { useState } from "react";


const Register = () => {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const [registerFormData, setRegisterFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const { firstname, lastname, email, password } = registerFormData;

    const inputChange = (event) => {
        setRegisterFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const registerData = (click)=>{
        console.log("hello");
    }


    return (
        <section>
            <h1>Registration Page</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder="firstname" name="firstname" value={firstname} onChange={inputChange} />
                <input type="text" placeholder="lastname" name="lastname" value={lastname} onChange={inputChange} />
                <input type="email" placeholder="email" name="email" value={email} onChange={inputChange} />
                <input type="password" placeholder="password" name="password" value={password} onChange={inputChange} />
                <button onClick={registerData}>Register</button>
            </form>
        </section>


    )
}

export default Register;