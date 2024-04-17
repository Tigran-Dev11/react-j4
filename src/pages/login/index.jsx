import "./style.css";
import { useState } from "react";


const Login = () => {

    const [loginFormData, setLoginFormData] = useState({
        firstname: "",
        lastname: "",
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

    const onSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('loginFormData', JSON.stringify(loginFormData))

    }

    return (
        <section>
            <h1>Login Page</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="email" placeholder="email" name="email" value={email} onChange={inputChange} />
                <input type="password" placeholder="password" name="password" value={password} onChange={inputChange} />
                <button>Login</button>
            </form>
        </section>


    )
}

export default Login;