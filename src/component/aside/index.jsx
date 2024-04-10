import './style.css';
import { asideMenuList } from '../../util/constant';



const Aside = ()=>{

    return (

        <aside>
            
            {asideMenuList.map(({name, img, title}, index)=>{
                return (
                    <div key={index}>
                        <h4>{name}</h4>
                        <img src={img} alt="photo" />
                        <h2>{title}</h2>
                    </div>
                )
            })}
        </aside>
    )
}

export default Aside;