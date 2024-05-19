import * as S from './styled.js'


const Input = ({type, placeholder, onChange, value, checked}) => {


    return (
        <S.Inp type={type} placeholder={placeholder} onChange={onChange} value={value} checked={checked}></S.Inp>
    )
};

export default Input;