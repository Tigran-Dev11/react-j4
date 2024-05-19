import * as S from './styled.js'


const Button = ({title, onClick}) => {

    return (
        <S.Btn onClick={onClick}> {title}</S.Btn>
    )
};

export default Button;