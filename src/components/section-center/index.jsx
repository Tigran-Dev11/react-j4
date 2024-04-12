import './style.css';
import IMAGES from '../../aseets/index';


const Section = ()=>{
    
     return(
        <section>
            <div className='cont-1'>
                <h4>FW22 collection</h4>
                <h1>An Endless Pursuit of Nature</h1>
                <p>In 1853 Ole Andreas Devold embarked on his journey, and since then our wool has been formed in the roughest conditions. Today, we build on our tradition of mastering wool. Relying on our dedication to craftmanship, we develop the finest quality from the most robust material. Crafted to withstand storms and to comfort on late summer nights. With profound care for nature, we create knitwear that lasts, that can be passed on – a legacy for times to come.</p>
            </div>
            <div className='cont-2'>
                <img src={IMAGES.women} alt="#" />
            </div>
        </section>
     )
}

export default Section