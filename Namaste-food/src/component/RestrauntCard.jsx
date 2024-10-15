import { CDN_URL } from "../utils/constants";

export const RestrauntCard = ({ resdata }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resdata?.info || {};
    
    return (
        <div className="bg-slate-200 hover:bg-slate-300 rounded-lg border-black m-[10px] p-4 flex flex-col">
            <div>
                <img className="w-[250px] h-[200px] rounded-3xl" src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "/path-to-placeholder.jpg"} alt={name} />
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

export const RestrauntCardPromoted = (RestrauntCard)=>{ //higher order component
    return(props)=>{
        return(
            <div>
                <label className="absolute p-1 m-2 bg-black text-white rounded-lg">Promoted</label>
                <RestrauntCard {...props}/>
            </div>
        )
    }
}
