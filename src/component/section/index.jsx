import "./style.css";
import { sectionMenuList } from "../../util/constant";



const Section = () => {

    return (
        <section>
            {sectionMenuList.map(({ name, title, info, img }, index) => {
                return (
                    <div key={index}>
                        <p>{name}</p>
                        <h1>{title}</h1>
                        <button>{info}</button>
                        <img src={img} alt="photo" />
                    </div>
                )
            })}
        </section>
    )
}


export default Section