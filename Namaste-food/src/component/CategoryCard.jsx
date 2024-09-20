import { useState } from "react";
import MenuItem from "./MenuItem";

const CategoryCard = ({data,menu})=>{
    const [visiblity,SetVisiblity] = useState(false);
    console.log(menu);
    const handleClick = ()=>{
        SetVisiblity(!visiblity);
    }
    return (
        <div>
            <div onClick={handleClick} className="cursor-pointer px-4 py-5 my-4 border flex justify-between rounded-xl w-6/12 mx-auto shadow-xl">
            <div className="text-lg font-bold">
            {data.card.card.title} ({menu.length})
            </div>
            <div>
                ⬇️
            </div>
        </div>
        {visiblity && menu.map(m => <MenuItem key={m?.card?.info?.id || m?.title} menuItem={m?.card?.info?.name || m?.title}/>)}
        </div>
    )
}
export default CategoryCard;