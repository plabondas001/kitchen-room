import { use, useState } from "react";
import Card from "../Card/Card";
import Order from "../Order/Order";
import CookingNow from "../CookingNow/CookingNow";
import ReadyItem from "../ReadyItem/ReadyItem";

const OrderContainer = ({promise}) => {
    const data = use(promise)

    const [orders,setOrders] = useState(data)
    const [cooking,setCooking] = useState([])

    const [readyItem,setReadyItem] = useState([])
    
    const handleCooking = (orders) =>{

        const isExist = cooking.find(item => item.id == orders.id)
        if(isExist){
         alert("Allready Cooking")
         return
        }

        const newCookingItems = [...cooking,orders]
        setCooking(newCookingItems)

    }
   
    
    const handleReadyItem = (order) => {
        const newReady = [...readyItem,order]
        setReadyItem(newReady)

        const removeItem = cooking.filter(item => item.id !== order.id)
        setCooking(removeItem)
        
        
        const removeCooking = orders.filter(item => item.id !== order.id)
        setOrders(removeCooking)
        
    }
     
    
    
    return (
        <div>
            <Card readyItem = {readyItem.length} totalCooking = {cooking.length} totalOrders = {orders.length}></Card>
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
                        cooking.map(orderItem => <CookingNow handleReadyItem={handleReadyItem} key={orderItem.id} orderItem = {orderItem}></CookingNow>)
                    }
                </div>
                <h1 className="font-bold text-4xl">Order Ready</h1>
                <div className="shadow-xl rounded-xl p-10">
                    {
                        readyItem.map(item => <ReadyItem item ={item}></ReadyItem>)
                    }
                </div>
            </div>

            </section>
        </div>
    );
};

export default OrderContainer;