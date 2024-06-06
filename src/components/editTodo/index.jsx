import * as S from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../libs/redux/todo-slice/selector";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";



const EditedTodoItem = () =>{

    const {todo , todos , todoValue } = useSelector(todosSelector)

    const dispatch = useDispatch()

    return(
<S.Container>
<S.TodoInput type="text" value={todoValue}></S.TodoInput>
<S.SubmitBtn>Add</S.SubmitBtn>
</S.Container>
    )
}

export default EditedTodoItem;