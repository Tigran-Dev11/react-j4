import "./style.scss";


function Button({ title, placeholder }) {

    return(
        <button placeholder = {placeholder}>{title}</button>
    )
    
}

export default Button;