import { use, useState } from "react";
import Card from "../Card/Card";
import Order from "../Order/Order";
import CookingNow from "../CookingNow/CookingNow";

const OrderContainer = ({promise}) => {
    const orders = use(promise)

    const [cooking,setCooking] = useState([])
    
    const handleCooking = (orders) =>{

        const newCookingItems = [...cooking,orders]
        setCooking(newCookingItems)
    }
   
    
 
    
    return (
        <div>
            <Card totalCooking = {cooking.length} totalOrders = {orders.length}></Card>
            <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7">
                <h1 className="font-bold text-4xl">Current Orders</h1>
                <div className="space-y-5">
                {
                    orders.map((item) => <Order handleCooking={handleCooking} key={item.id} item = {item}></Order>)
                }
                </div>
            </div>
            <div className="lg:col-span-5 space-y-5">
                <h1 className="font-bold text-4xl">Cooking Now</h1>
                <div className="shadow-xl rounded-xl p-10">
                    {
                        cooking.map(orderItem => <CookingNow key={orderItem.id} orderItem = {orderItem}></CookingNow>)
                    }
                </div>
                <h1 className="font-bold text-4xl">Order Ready</h1>
                <div className="shadow-xl rounded-xl p-10"></div>
            </div>

            </section>
        </div>
    );
};

export default OrderContainer;