const ReadyItem = ({item}) => {
    return (
        <div className="shadow-xl border border-amber-500 mt-2 p-3 space-y-3 rounded-xl">
            <h1 className="font-semibold text-xl">{item.order_title}</h1>
            <p className="text-xl">Quantity : {item.quantity}</p>
            <p>{item.waiterId}</p>
            <p>Cooked: {item.CookedAt}</p>
        </div>
    );
};

export default ReadyItem;