
function Input({type,placeholder,onChange, value}){


    return(
        <input type = {type} placeholder={placeholder}  value={value}  onChange={onChange} />
    )
}

export default Input;