import "./style.scss"

const Input = ({ type, placeholder , onChange , value, defaultChecked}) => {
    return <input type={type} placeholder={placeholder} onChange = {onChange} value={value} defaultChecked={defaultChecked}/>;
  };
  
  export default Input;