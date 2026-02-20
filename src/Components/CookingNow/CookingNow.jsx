const CookingNow = ({orderItem}) => {
    console.log(orderItem);
    
    return (
        <div className="border bg-yellow-400 border-amber-500 mt-2 rounded-xl text-center">
            <h1 className="font-semibold text-xl">{orderItem.order_title}</h1>
        </div>
    );
};

export default CookingNow;