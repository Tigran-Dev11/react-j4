import Button from "../../../components/commons/button"
import Input from "../../../components/commons/input"
import * as S from "./styled"


const Register = () => {

    const onsubmit = () => {

    }
    return(
        <S.registerContainer>
            <S.registerCardCont>
             <S.titleRegister>Register</S.titleRegister>
             <S.formInputs onSubmit={onsubmit}>
                <S.label htmlFor="fullName">userName</S.label>
                <Input name="fullName" type="text" required="required" /> 
                <S.label htmlFor="Email">Email</S.label>
                <Input name="Email"  type="email" required="required" />
                <S.label htmlFor="password">password</S.label>
                <Input name="password" type="password" required="required"/>
                <S.label htmlFor="card">Card</S.label>
                <Input name="card" type="number" required="required"/>
                <Button>enter</Button>
             </S.formInputs>
            </S.registerCardCont>
        </S.registerContainer>
    )
}

export default Register