import 
const ToggleMenu = () =>{
    return(
        <S.ToggleMenu>
        {menu(t).map(({title,path}) =>(
<S.ToggleItem key={path}>
<S.TogglePath href={path}>{title}</S.TogglePath>
</S.ToggleItem>
        ))}
       
      </S.ToggleMenu>
    )
}
export default ToggleMenu;