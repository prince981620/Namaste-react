import { CDN_URL } from "../utils/constants";

export const RestrauntCard = ({ resdata }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resdata?.info || {};
    
    return (
        <div className="bg-slate-300 border-black m-[10px] w-[250px] flex flex-col">
            <div className="h-[45%]">
                <img className="w-full h-full object-cover" src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "/path-to-placeholder.jpg"} alt={name} />
            </div>

            <div className="p-2 flex flex-col justify-around">
                <h2 className="text-lg mt-2 font-serif">{name}</h2>
                <h3 className="text-sm mt-2 text-gray-700">{cuisines?.join(", ")}</h3>
                <h3 className="text-sm mt-2 ">{avgRating} Stars</h3>
                <h3 className="text-sm mt-2">{sla?.deliveryTime} Minutes</h3>
            </div>
        </div>
    );
};
