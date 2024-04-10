const Input = ({type, placeholder, ...props }) => {
  

  return <input placeholder={placeholder} type={type} {...props}/>;
};

export default Input;