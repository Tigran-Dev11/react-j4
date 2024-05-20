import "./style.css"
const Input = (params) => {
    return(
        <div className="inputbox">
             <span>{params.name}</span>
            <input type={params.type} required={params.required} />
            <i></i>
        </div>
    )
}

export default Input