import * as S from "./styled.js";



const Input = ({type, placeholder, onChange, value, checked}) => {


    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} checked={checked}/>
    )
};

export default Input;