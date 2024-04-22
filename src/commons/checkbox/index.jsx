import "./style.css";


const Checkbox = ({type, id, ...props})=>{

    return <input id={id} type={type} {...props}/>;
};

export default Checkbox;