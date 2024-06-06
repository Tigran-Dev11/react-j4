import * as S from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../libs/redux/todo-slice/todo-slice";
import { todosSelector } from "../../libs/redux/todo-slice/selector";

const TodoItem = () => {
  const { todo, todos } = useSelector(todosSelector);

  const dispatch = useDispatch()

  const deleteTodo = (id) =>{
dispatch(todoActions.deleteTodo(id))
  }
  const isComplete = (id) =>{
    dispatch(todoActions.isComplete(id))
  }

  const isEdited = (id) =>{
    dispatch(todoActions.isEdith(id))
  }

  return (
    <S.Container key={todo.id}>
      {todos.map((todo) => (
        <S.ItemContainer>
            <S.ItemComplet type = "checkbox" onChange={() => isComplete(todo.id)}></S.ItemComplet>
          {todo.edith ? ( 
            <S.TodoInput value={todo.title}></S.TodoInput>
          ):(
          <S.ItemText className={`${todo.complete ? "completed" : ""}`}>{todo.title}</S.ItemText>

          )
          }
          {todo.edith ? ( 
            <S.SubmitBtn>Save</S.SubmitBtn>
          ):(
<S.ItemBtn onClick={() => deleteTodo(todo.id)} className={`${todo.edith ? "edith" : ""}`}>Delete</S.ItemBtn>,
      <S.ItemBtn onClick={() => isEdited(todo.id)} className={`${todo.edith ? "edith" : ""}`}>Edith</S.ItemBtn>
          )}

      

        </S.ItemContainer>
      ))}
    </S.Container>
  );
};

export default TodoItem;
