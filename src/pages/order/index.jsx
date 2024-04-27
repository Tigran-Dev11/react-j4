import Input from "../../commons/input";
import "./style.scss";


const Order = () => {


    return (
        <div className="orderContainer">
            <h1>Order Page</h1>
            <Input
                type="text"
                placeholder="Fullname *"
                variant={'primary'}
            /><Input
                type="email"
                placeholder="Email *"
                variant={'primary'}
            />
            <Input
                type="number"
                placeholder="Number *"
                variant={'primary'}
            />
            <Input
                type="text"
                placeholder="Address *"
                variant={'primary'}
            />

            <button className="orderButton">Order</button>

        </div>
    )
}

export default Order;