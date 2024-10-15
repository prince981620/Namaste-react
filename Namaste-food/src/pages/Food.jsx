import { useEffect, useState } from "react";
import axios from "axios";
import { RestrauntCard, RestrauntCardPromoted } from "../component/RestrauntCard";
import { Shimmer } from "../component/shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

export const Food = ()=>{
    const [resData,setResData] = useState([]);
    const [filteredRes,setFilterRes] = useState([]);
    // const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        apicall();
    },[])
    const apicall = async ()=>{
        const res = await axios.get(SWIGGY_API);
        const result = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(result);
        setFilterRes(result);
    }
    // console.log(filteredRes);
    const searchReastraunt = (searchText)=>{
        const res = resData.filter((curRes)=> curRes.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        setFilterRes(res);
    }
    const PromotedRestrauntCard = RestrauntCardPromoted(RestrauntCard);
    return (
        <div className="bg-green-600 flex flex-col justify-center items-center">
            <div className="bg-blue-300">
                <input className="border m-4 p-2" type="text" placeholder="search" onChange={(e)=>{
                    // setSearchText(e.target.value);
                    searchReastraunt(e.target.value);
                    }}/>
                {/* <button type="button" className="mt-2 text-white bg-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button> */} </div>
            <div className="grid grid-cols-3 md:grid-cols-5 bg-red-400 w-full mt-4">
            {filteredRes.length === 0 ? <Shimmer/> : filteredRes.map((res)=>
            <Link key={res.info.id} to={"/restraunt/" + res.info.id}>
                {res.info.avgRating >= 4.5 ?<PromotedRestrauntCard resdata={res}/>:<RestrauntCard key={res.info.id} resdata={res}/>}
            </Link>)}
            </div>
        </div>
    )
}