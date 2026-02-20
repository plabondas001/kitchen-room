import { UtensilsCrossed } from "lucide-react";

const Order = ({item,handleCooking}) => {




    return (
        <div className="p-5 rounded-xl shadow-xl relative mt-5 space-y-3">
            {/* order no */}
            <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl"># {item.order_no}</p>

            {/* order title */}
            <h1 className="text-xl flex items-center gap-2">
                <UtensilsCrossed></UtensilsCrossed>
                {item.quantity} {item.order_title}
            </h1>

            {/* special instruction */}
            <div className="mt-3 text-xs">
                <h4 className="font-bold text-yellow-500 text-sm">Instruction</h4>
                <p>{item.special_instruction}</p>
            </div>

            {/* table number badge */}
            <div className="absolute right-2 top-2 w-10 h-10 flex justify-center items-center rounded-full opacity-50 bg-orange-500 text-white">
            {item.table_no}
            </div>

            {/* cooking button */}
            <div className="absolute right-2 bottom-2 bg-amber-500 rounded-xl px-2 py-2 hover:bg-rose-500 hover:text-white hover:font-bold">
                <button onClick={() => handleCooking(item)} className="cursor-pointer">Cooking</button>
            </div>
        </div>
    );
};

export default Order;