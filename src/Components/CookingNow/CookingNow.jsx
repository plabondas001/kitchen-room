const CookingNow = ({orderItem,handleReadyItem}) => {
    
    return (
        <div style={{background:"url('/cook-bg.gif')"}} className="shadow-xl mt-2 p-3 space-y-3 rounded-xl">
            <h1 className="font-semibold text-xl">{orderItem.order_title}</h1>
            <p className="text-xl">Quantity : {orderItem.quantity}</p>
            <p>{orderItem.special_instruction}</p>
            <button onClick={() => handleReadyItem(orderItem)} className="bg-orange-500 py-1 px-5 hover:bg-black hover:text-white cursor-pointer rounded-2xl">Cooked?</button>
        </div>
    );
};

export default CookingNow;