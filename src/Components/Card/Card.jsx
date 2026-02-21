import { CookingPot, NotebookPen,ScrollText} from "lucide-react";

const Card = ({totalOrders,totalCooking,readyItem}) => {
   
    
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="border-4 border-dotted border-yellow-500 rounded-4xl p-5">
        <div className="flex flex-col lg:flex-row items-center text-center justify-between">
          <ScrollText
            className="animate-pulse"
            color="orange"
            size={100}
          ></ScrollText>
          <div className="font-bold text-xl">
            Current Orders
            <h1 className="text-4xl">{totalOrders}</h1>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted border-yellow-500 rounded-4xl p-5">
        <div className="flex flex-col lg:flex-row items-center text-center justify-between">
          
           <CookingPot className="animate-pulse"
            color="orange"
            size={100} />
          
          <div className="font-bold text-xl">
            Current Cooking
            <h1 className="text-4xl">{totalCooking}</h1>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted border-yellow-500 rounded-4xl p-5">
        <div className="flex flex-col lg:flex-row items-center text-center justify-between">
         
          <NotebookPen   className="animate-pulse"
            color="orange"
            size={100} />
         
          <div className="font-bold text-xl">
            Order Ready
            <h1 className="text-4xl">{readyItem}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
