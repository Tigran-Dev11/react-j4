import TodoForm from "../../components/todo"
import TodoItem from "../../components/todo-item"
import * as S from "./styled"


const Home = () =>{
    return(
<S.HomeContainer>
<TodoForm/>
<TodoItem/>
</S.HomeContainer>
    )
}

export default Home