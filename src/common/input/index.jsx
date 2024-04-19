const Input = ({ type, placeholder,register }) => {
  return <input type={type} placeholder={placeholder} {...register} />;
};

export default Input;
