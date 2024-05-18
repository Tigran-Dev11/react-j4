import "./style.css";



const Input = ({type, placeholder, onChange, value, checked}) => {


    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} checked={checked}/>
    )
};

export default Input;