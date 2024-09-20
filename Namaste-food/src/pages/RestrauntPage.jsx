import { Shimmer } from "../component/shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import CategoryCard from "../component/CategoryCard";

export const RestrauntPage = ()=>{
    const { resid } = useParams();

    const resInfo = useRestrauntMenu(resid);

    if(resInfo === null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,avgRating} = resInfo.data.cards[2].card.card.info;
    const card = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(card);
    const recommendedData = card[2];
    const filteredCategoryCard = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> 
            c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    // console.log(filteredCategoryCard);
    return (
        <div className="text-center py-2 my-2">
            <div className="border w-6/12 m-auto p-4 shadow-xl rounded-3xl" >
                <h1 className="font-extrabold text-xl">{name}</h1>
                <span className="mx-2">{cuisines.join(", ")}</span>
                <span>{costForTwoMessage}</span>
                <br />
                <div>
                    <span>{avgRating} ⭐️</span>
                </div>
            </div>
            <div className="m-4 text-xl font-serif">{ "<- " + "Menu" + " ->"}</div>
            <CategoryCard data={recommendedData} menu={recommendedData.card.card.itemCards}/>
            {filteredCategoryCard.map((c,index) => <CategoryCard key={index} data={c} menu={c.card.card.categories}/>)}
        </div>
    )
}