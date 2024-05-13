import * as S from "./styled";
import Input from "../../commons/input";
import Button from "../../commons/button";
import { useDispatch } from "react-redux";
import { todoActions } from "../../libs/redux/todos-slice/todos-slice";




const TodoForm = () => {

   
    const dispatch = useDispatch();

    const addTodo = () => {
     
      dispatch(todoActions.addTodo());
    };

    const changeValue = () =>{
        dispatch(todoActions.changeValue());
    }



  return (
    <>
    <S.TodoTitle>Todos Task</S.TodoTitle>
    <S.TodoForm onSubmit={addTodo}>
        
      <Input type="text" placeholder="Add Your Next Task ........"  onChange={changeValue}/>

      <Button title="+" />
    </S.TodoForm>
    </>
  );
};

export default TodoForm;
