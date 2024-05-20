import { useNavigate } from "react-router-dom"
import Input from "../../../components/commons/input"
import * as S from "./styled"
import { ROUTES } from "../../../utils/constants"
import Button from "../../../components/commons/button"

const Login = () => {

const navigate = useNavigate()
    
const goToRegister = () => {
    navigate(ROUTES.register)
}
 
    return(
        <S.loginContainer>
            <S.loginCardCont>
             <S.titleLogin>Login</S.titleLogin>
             <S.formInputs onSubmit={onsubmit}>
                <S.label htmlFor="fullName">userName</S.label>
                <Input name="fullName" type="text" required="required" /> 
                <S.label htmlFor="Email">Email</S.label>
                <Input name="Email"  type="email" required="required" />
                <S.label htmlFor="password">password</S.label>
                <Input name="password" type="password" required="required"/>
                <S.linkToRegister onClick={goToRegister}>do not have an account ?</S.linkToRegister>
                <Button>enter</Button>
             </S.formInputs>
            </S.loginCardCont>
        </S.loginContainer>
    )
}

export default Login