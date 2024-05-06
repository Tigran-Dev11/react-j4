import Button from "../commons/button";

function TodoTask ({title}){

    return(
        <div className="todoTask">
          <p>{title}</p>
       <Button title="Delete"/>
       <Button title="Edit"/>

        </div>
    )
};

export default TodoTask