import { useDispatch, useSelector } from "react-redux"
import * as S from "./styled"
import { todosSelector } from "../../libs/redux/todo-slice/selector"
import { todoActions } from "../../libs/redux/todo-slice/todo-slice"





const TodoForm = () =>{
    const { todoValue } = useSelector(todosSelector)

    const dispatch = useDispatch()

    const changeValue = (e) =>{
        dispatch(todoActions.changeValue(e.target.value))
    }

    const addTodo = (e) =>{
        e.preventDefault()
          dispatch(todoActions.addTodo())
    }
return(
    <S.Container>
        <S.TodoForm onSubmit={addTodo}>
            <S.TodoInput placeholder="Add Your New Task" value={todoValue} onChange={changeValue}></S.TodoInput>
            <S.SubmitBtn>Add Todo</S.SubmitBtn>
        </S.TodoForm>
    </S.Container>
)
}

export default TodoForm