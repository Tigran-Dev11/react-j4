import "./style.scss"
import { useState , useContext } from "react";
import { GlobalContext } from "../../provider/provider";


const Cart = ({ post }) => {
    const [count, setCount] = useState(1);
    const { basketItem } = useContext(GlobalContext);
  console.log(basketItem);
      const item = {
        id: post.id,
        title: post.title,
        img: post.image,
        count
      };

      function deleteBtn(){
           console.log("ok");
      }
  
    function incrementNum(){
      setCount(count + 1)
    }
    function decrementNum(){
      setCount(count - 1)
    }
  
  
  
    return (
      <div className="prodContainer">
    
        <h1 key={item.id} className="title">
          {item.title}
        </h1>
        <img src={item.image} alt="image" />
        <h1 key={item.id} className="price">
          Price:{item.price}
        </h1>
  
        <h1 key={item.id} className="desc">
          {item.description}
        </h1>
        <div className="btnContainer">
          <button onClick={decrementNum} className="decrementbtn">-</button>
          {count}
          <button onClick={incrementNum} className="incrementbtn">+</button>
  
          <button onClick={deleteBtn} className="addbtn" >Delete</button>
        </div>
      </div>
    );
  };
  
  export default Cart;