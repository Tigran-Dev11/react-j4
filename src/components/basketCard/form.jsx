import "./style.scss";

const Form = () =>{


    const onSubmit = (data) => {
        localStorage.setItem("setdata",data)
      };

    return(
        <form action="" >
    <input type="text" name = "name" />,
    <input type="cell" name = "cell" />,
    <input type="email" name = "email" />,
    <input type="number" name = "cardnumber" />,
    
    <button  onSubmit={onSubmit}>Submit</button>
    </form>
    )

}

export default Form