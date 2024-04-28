import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data, showItems, setShowIndex}) => {
   const handleClick = ()=>{
    setShowIndex();
   }
  return (
    <div>
      {/* Header */}
      
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg ">
        <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-base">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
       </div>
       {showItems && <ItemList items={data.itemCards}/>}
      </div>  
    </div>
   
  );
};

export default ResCategory;